import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trash2, Upload, Loader2, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminVideos() {
  const queryClient = useQueryClient();
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({ title: '', role: 'gallery', poster_url: '', video_url: '' });

  const { data: videos = [], isLoading } = useQuery({
    queryKey: ['videoProjects'],
    queryFn: () => base44.entities.VideoProject.list('-created_date')
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.VideoProject.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['videoProjects'] });
      setFormData({ title: '', role: 'gallery', poster_url: '', video_url: '' });
      toast.success('Video project created');
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.VideoProject.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['videoProjects'] });
      toast.success('Video project deleted');
    }
  });

  const handleFileUpload = async (e, field) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const loadingToast = toast.loading(`Uploading ${field}...`);
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      setFormData(prev => ({ ...prev, [field]: file_url }));
      toast.success(`Upload complete`, { id: loadingToast });
    } catch (error) {
      console.error(error);
      toast.error('Upload failed', { id: loadingToast });
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.video_url) {
      toast.error('Title and Video are required');
      return;
    }
    createMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 pt-32">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Manage Videos</h1>
          <p className="text-slate-600 mt-2">Upload videos and set where they appear on the Multi Media page.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Add New Video</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input 
                  value={formData.title} 
                  onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))} 
                  placeholder="Video Title" 
                />
              </div>
              <div className="space-y-2">
                <Label>Display Role</Label>
                <Select value={formData.role} onValueChange={v => setFormData(prev => ({ ...prev, role: v }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hero">Hero Video (Main)</SelectItem>
                    <SelectItem value="gallery">Gallery Video (Grid)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Video File (MP4, MOV)</Label>
              <div className="flex items-center gap-4">
                <Input 
                  type="file" 
                  accept="video/*" 
                  onChange={e => handleFileUpload(e, 'video_url')} 
                  disabled={isUploading}
                />
                {formData.video_url && <Check className="w-5 h-5 text-green-500" />}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Poster Image (Optional cover image)</Label>
              <div className="flex items-center gap-4">
                <Input 
                  type="file" 
                  accept="image/*" 
                  onChange={e => handleFileUpload(e, 'poster_url')} 
                  disabled={isUploading}
                />
                {formData.poster_url && <Check className="w-5 h-5 text-green-500" />}
              </div>
            </div>

            <Button type="submit" disabled={isUploading || createMutation.isPending} className="w-full">
              {createMutation.isPending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Upload className="w-4 h-4 mr-2" />}
              Save Video
            </Button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Existing Videos</h2>
          {isLoading ? (
            <div className="flex justify-center py-8"><Loader2 className="w-8 h-8 animate-spin text-slate-400" /></div>
          ) : (
            <div className="grid gap-4">
              {videos.map(video => (
                <div key={video.id} className="flex items-center justify-between p-4 border border-slate-100 rounded-lg bg-slate-50/50">
                  <div className="flex items-center gap-4">
                    {video.poster_url ? (
                      <img src={video.poster_url} className="w-16 h-16 object-cover rounded-md" alt={video.title} />
                    ) : (
                      <div className="w-16 h-16 bg-slate-200 rounded-md flex items-center justify-center">
                        <span className="text-xs text-slate-400">No Image</span>
                      </div>
                    )}
                    <div>
                      <h3 className="font-medium text-slate-900">{video.title}</h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-slate-500">
                        <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-xs font-medium uppercase tracking-wider">
                          {video.role}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    onClick={() => {
                      if (window.confirm('Delete this video?')) {
                        deleteMutation.mutate(video.id);
                      }
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              {videos.length === 0 && (
                <p className="text-center text-slate-500 py-8">No videos added yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}