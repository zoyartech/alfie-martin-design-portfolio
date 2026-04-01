import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Edit2, Trash2, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function AdminInsights() {
  const [editingPost, setEditingPost] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: insights, isLoading } = useQuery({
    queryKey: ['admin-insights'],
    queryFn: () => base44.entities.Insight.list('-created_date', 100),
    initialData: []
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.Insight.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-insights'] });
      setIsCreating(false);
      toast({ title: "Post created successfully" });
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Insight.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-insights'] });
      setEditingPost(null);
      toast({ title: "Post updated successfully" });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.Insight.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-insights'] });
      toast({ title: "Post deleted" });
    }
  });

  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      title: formData.get('title'),
      slug: formData.get('slug'),
      seo_description: formData.get('seo_description'),
      cover_image: formData.get('cover_image'),
      content: formData.get('content'),
    };
    
    if (editingPost) {
      updateMutation.mutate({ id: editingPost.id, data });
    } else {
      createMutation.mutate(data);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold font-serif text-slate-900">Blog Manager</h1>
            <p className="text-slate-500 mt-2 font-sans">Create and edit dynamic insights</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" asChild>
              <Link to={createPageUrl('Insights')}>View Public Blog</Link>
            </Button>
            <Button onClick={() => setIsCreating(true)} className="gap-2" disabled={isCreating || editingPost}>
              <Plus className="w-4 h-4" /> New Post
            </Button>
          </div>
        </div>

        {(isCreating || editingPost) ? (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-10 font-sans">
            <h2 className="text-xl font-bold mb-6 font-serif">{editingPost ? 'Edit Post' : 'Create New Post'}</h2>
            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Title *</label>
                  <Input name="title" defaultValue={editingPost?.title || ''} required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Slug (URL-friendly) *</label>
                  <Input name="slug" defaultValue={editingPost?.slug || ''} required placeholder="e.g. my-first-post" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Cover Image URL</label>
                <div className="flex gap-3">
                  <Input name="cover_image" defaultValue={editingPost?.cover_image || ''} placeholder="https://..." />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Short Description (SEO / Card)</label>
                <Input name="seo_description" defaultValue={editingPost?.seo_description || ''} />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium flex justify-between">
                  <span>Content (Markdown) *</span>
                  <a href="https://www.markdownguide.org/cheat-sheet/" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline text-xs">Markdown Guide</a>
                </label>
                <Textarea 
                  name="content" 
                  defaultValue={editingPost?.content || ''} 
                  required 
                  className="min-h-[300px] font-mono text-sm p-4"
                  placeholder="# Heading&#10;&#10;Write your post content here using markdown..."
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button type="button" variant="outline" onClick={() => { setIsCreating(false); setEditingPost(null); }}>
                  Cancel
                </Button>
                <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
                  {editingPost ? 'Save Changes' : 'Publish Post'}
                </Button>
              </div>
            </form>
          </div>
        ) : null}

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden font-sans">
          {isLoading ? (
            <div className="p-8 text-center text-slate-500">Loading posts...</div>
          ) : insights?.length === 0 ? (
            <div className="p-12 text-center text-slate-500">
              <p>No blog posts yet.</p>
              <Button variant="outline" className="mt-4" onClick={() => setIsCreating(true)}>Write your first post</Button>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {insights?.map(post => (
                <div key={post.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-slate-50 transition-colors gap-4">
                  <div className="flex items-center gap-4">
                    {post.cover_image ? (
                      <img src={post.cover_image} alt="" className="w-16 h-12 object-cover rounded-md bg-slate-100" />
                    ) : (
                      <div className="w-16 h-12 bg-slate-100 rounded-md flex items-center justify-center text-slate-400">
                        <ImageIcon className="w-5 h-5" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-slate-900">{post.title}</h3>
                      <div className="text-xs text-slate-500 flex items-center gap-2 mt-1 font-medium tracking-wide">
                        <span>/{post.slug}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                        <span>{new Date(post.created_date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 self-end sm:self-auto">
                    <Link to={createPageUrl('InsightDetail') + `?id=${post.id}`} target="_blank" className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                      View
                    </Link>
                    <button 
                      onClick={() => setEditingPost(post)}
                      className="p-2 text-blue-500 hover:bg-blue-50 rounded transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => {
                        if(window.confirm('Are you sure you want to delete this post?')) {
                          deleteMutation.mutate(post.id);
                        }
                      }}
                      className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}