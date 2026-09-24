import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, FileText, Image, Settings, Users, FolderOpen, 
  Sparkles, ChevronRight, Plus, Search, Bell, LogOut, Edit3,
  Eye, Trash2, Copy, Upload, X, Check, BarChart3, Globe, Palette
} from 'lucide-react';
import { services, projects, testimonials } from '../data/content';

type AdminSection = 'dashboard' | 'content' | 'media' | 'seo' | 'settings' | 'ai';

export default function Admin() {
  const [activeSection, setActiveSection] = useState<AdminSection>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard' as AdminSection, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'content' as AdminSection, label: 'Content', icon: FileText },
    { id: 'media' as AdminSection, label: 'Media', icon: Image },
    { id: 'ai' as AdminSection, label: 'AI Assistant', icon: Sparkles },
    { id: 'seo' as AdminSection, label: 'SEO', icon: Globe },
    { id: 'settings' as AdminSection, label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex">
      {/* Sidebar */}
      <aside className={`fixed lg:relative z-40 h-screen transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-0 lg:w-20'} bg-[#111111] border-r border-white/5 flex flex-col`}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-elite-accent to-elite-accent-light flex items-center justify-center">
            <span className="text-xs font-bold text-elite-black">E</span>
          </div>
          {sidebarOpen && <span className="font-medium text-elite-white text-sm">Elite Minds</span>}
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-elite-accent/10 text-elite-accent'
                  : 'text-elite-text hover:text-elite-white hover:bg-white/5'
              }`}
            >
              <item.icon size={18} />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-white/5">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-elite-text hover:text-elite-white hover:bg-white/5 transition-all">
            <LogOut size={18} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#0d0d0d]/80 backdrop-blur-xl sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <ChevronRight size={16} className={`text-elite-text transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} />
            </button>
            <h1 className="text-lg font-medium text-elite-white capitalize">{activeSection}</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 transition-colors relative">
              <Bell size={16} className="text-elite-text" />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-elite-accent" />
            </button>
            <div className="w-8 h-8 rounded-full bg-elite-accent/20 flex items-center justify-center">
              <span className="text-xs font-medium text-elite-accent">A</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeSection === 'dashboard' && <DashboardContent />}
              {activeSection === 'content' && <ContentManager />}
              {activeSection === 'media' && <MediaLibrary />}
              {activeSection === 'ai' && <AIAssistant />}
              {activeSection === 'seo' && <SEOManager />}
              {activeSection === 'settings' && <SettingsPanel />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

function DashboardContent() {
  const statsCards = [
    { label: 'Total Projects', value: '6', change: '+2 this month', icon: FolderOpen },
    { label: 'Published Pages', value: '12', change: 'All live', icon: Globe },
    { label: 'Media Assets', value: '48', change: '+5 this week', icon: Image },
    { label: 'Page Views', value: '12.4K', change: '+18% vs last month', icon: BarChart3 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-medium text-elite-white mb-2">Welcome back</h2>
        <p className="text-elite-text">Here's an overview of your website.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((stat) => (
          <div key={stat.label} className="p-5 rounded-xl bg-[#161616] border border-white/5">
            <div className="flex items-center justify-between mb-3">
              <stat.icon size={18} className="text-elite-accent" />
              <span className="text-xs text-green-400">{stat.change}</span>
            </div>
            <p className="text-2xl font-medium text-elite-white">{stat.value}</p>
            <p className="text-sm text-elite-text mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="rounded-xl bg-[#161616] border border-white/5 p-6">
        <h3 className="text-lg font-medium text-elite-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'Updated homepage hero', time: '2 hours ago', type: 'edit' },
            { action: 'Published new project: Nexus AI', time: '1 day ago', type: 'publish' },
            { action: 'Added 5 new media assets', time: '2 days ago', type: 'upload' },
            { action: 'Updated SEO metadata', time: '3 days ago', type: 'seo' },
          ].map((activity, i) => (
            <div key={i} className="flex items-center gap-4 py-2 border-b border-white/5 last:border-0">
              <div className="w-8 h-8 rounded-lg bg-elite-accent/10 flex items-center justify-center">
                <Edit3 size={14} className="text-elite-accent" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-elite-white">{activity.action}</p>
                <p className="text-xs text-elite-text">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContentManager() {
  const [activeTab, setActiveTab] = useState('pages');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-medium text-elite-white mb-1">Content Manager</h2>
          <p className="text-elite-text text-sm">Manage your website content</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-elite-accent text-elite-black rounded-lg text-sm font-medium hover:bg-elite-accent-light transition-colors">
          <Plus size={16} />
          New Content
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-[#161616] rounded-lg border border-white/5 w-fit">
        {['pages', 'services', 'projects', 'testimonials'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm capitalize transition-all ${
              activeTab === tab ? 'bg-elite-accent/10 text-elite-accent' : 'text-elite-text hover:text-elite-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content List */}
      <div className="rounded-xl bg-[#161616] border border-white/5 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 text-xs uppercase tracking-wider text-elite-text">
          <div className="col-span-5">Title</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Updated</div>
          <div className="col-span-3 text-right">Actions</div>
        </div>
        {(activeTab === 'pages' ? [
          { title: 'Home', status: 'published', date: 'Today' },
          { title: 'About', status: 'published', date: '2 days ago' },
          { title: 'Services', status: 'published', date: '1 week ago' },
          { title: 'Projects', status: 'published', date: '3 days ago' },
        ] : activeTab === 'projects' ? projects.map(p => ({ title: p.title, status: 'published', date: p.date })) :
          activeTab === 'services' ? services.map(s => ({ title: s.title, status: 'published', date: 'This month' })) :
          testimonials.map(t => ({ title: t.name, status: 'published', date: 'This month' })
        )).map((item, i) => (
          <div key={i} className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 last:border-0 items-center hover:bg-white/[0.02] transition-colors">
            <div className="col-span-5 flex items-center gap-3">
              <FileText size={16} className="text-elite-text" />
              <span className="text-sm text-elite-white">{item.title}</span>
            </div>
            <div className="col-span-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs bg-green-500/10 text-green-400">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                {item.status}
              </span>
            </div>
            <div className="col-span-2 text-sm text-elite-text">{item.date}</div>
            <div className="col-span-3 flex items-center justify-end gap-2">
              <button className="p-1.5 rounded hover:bg-white/5 transition-colors" title="Preview">
                <Eye size={14} className="text-elite-text" />
              </button>
              <button className="p-1.5 rounded hover:bg-white/5 transition-colors" title="Edit">
                <Edit3 size={14} className="text-elite-text" />
              </button>
              <button className="p-1.5 rounded hover:bg-white/5 transition-colors" title="Delete">
                <Trash2 size={14} className="text-elite-text hover:text-red-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MediaLibrary() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const mediaItems = [
    { name: 'hero-background.jpg', type: 'image', size: '2.4 MB', date: 'Today' },
    { name: 'project-aurora.jpg', type: 'image', size: '1.8 MB', date: 'Yesterday' },
    { name: 'team-photo.jpg', type: 'image', size: '3.1 MB', date: '3 days ago' },
    { name: 'brand-video.mp4', type: 'video', size: '45 MB', date: '1 week ago' },
    { name: 'logo-dark.svg', type: 'image', size: '12 KB', date: '2 weeks ago' },
    { name: 'project-meridian.jpg', type: 'image', size: '2.1 MB', date: '2 weeks ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-medium text-elite-white mb-1">Media Library</h2>
          <p className="text-elite-text text-sm">Manage your images, videos, and documents</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-elite-accent text-elite-black rounded-lg text-sm font-medium hover:bg-elite-accent-light transition-colors">
          <Upload size={16} />
          Upload
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-elite-text" />
          <input
            type="text"
            placeholder="Search media..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#161616] border border-white/5 rounded-lg text-sm text-elite-white placeholder:text-elite-text focus:outline-none focus:border-elite-accent/50 transition-colors"
          />
        </div>
        <div className="flex gap-1 p-1 bg-[#161616] rounded-lg border border-white/5">
          <button className="p-1.5 rounded bg-white/5 text-elite-white"><Image size={14} /></button>
          <button className="p-1.5 rounded text-elite-text hover:text-elite-white"><FileText size={14} /></button>
        </div>
      </div>

      {/* Drop Zone */}
      <div className="border-2 border-dashed border-white/10 rounded-xl p-12 text-center hover:border-elite-accent/30 transition-colors cursor-pointer">
        <Upload size={32} className="mx-auto text-elite-text mb-4" />
        <p className="text-elite-white font-medium mb-1">Drop files here or click to upload</p>
        <p className="text-sm text-elite-text">Supports JPG, PNG, SVG, MP4, PDF up to 50MB</p>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {mediaItems.map((item, i) => (
          <div key={i} className="group relative aspect-square rounded-xl bg-[#161616] border border-white/5 overflow-hidden hover:border-elite-accent/30 transition-all cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-elite-accent/5 to-transparent flex items-center justify-center">
              {item.type === 'image' ? <Image size={24} className="text-elite-text/50" /> : <FileText size={24} className="text-elite-text/50" />}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-xs text-elite-white truncate">{item.name}</p>
              <p className="text-xs text-elite-text">{item.size}</p>
            </div>
            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1 rounded bg-black/50 hover:bg-black/70"><Copy size={12} className="text-elite-white" /></button>
              <button className="p-1 rounded bg-black/50 hover:bg-black/70"><Trash2 size={12} className="text-elite-white" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIAssistant() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm your AI content assistant. I can help you with writing, editing, SEO optimization, content analysis, and more. What would you like help with?" }
  ]);
  const [input, setInput] = useState('');

  const suggestions = [
    "Make the homepage headline more impactful",
    "Analyze my website content for SEO",
    "Rewrite the About page for a premium audience",
    "Find projects that need better descriptions",
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', content: input }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I've analyzed your request. Here are my suggestions:\n\n1. Consider using more active, confident language\n2. Focus on outcomes rather than features\n3. Add specific metrics where possible\n4. Ensure each section has a clear purpose\n\nWould you like me to apply any of these changes?" 
      }]);
    }, 1000);
    setInput('');
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-medium text-elite-white mb-1 flex items-center gap-2">
          <Sparkles size={20} className="text-elite-accent" />
          AI Content Assistant
        </h2>
        <p className="text-elite-text text-sm">Get intelligent suggestions for your content</p>
      </div>

      {/* Chat Area */}
      <div className="rounded-xl bg-[#161616] border border-white/5 overflow-hidden">
        <div className="h-[400px] overflow-y-auto p-6 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-elite-accent/10 text-elite-white border border-elite-accent/20' 
                  : 'bg-white/5 text-elite-light border border-white/5'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Suggestions */}
        <div className="px-6 pb-4">
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, i) => (
              <button
                key={i}
                onClick={() => setInput(suggestion)}
                className="px-3 py-1.5 rounded-full text-xs border border-white/10 text-elite-text hover:border-elite-accent/30 hover:text-elite-accent transition-all"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/5">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything about your content..."
              className="flex-1 px-4 py-2.5 bg-white/5 border border-white/5 rounded-lg text-sm text-elite-white placeholder:text-elite-text focus:outline-none focus:border-elite-accent/50 transition-colors"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2.5 bg-elite-accent text-elite-black rounded-lg text-sm font-medium hover:bg-elite-accent-light transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SEOManager() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-medium text-elite-white mb-1">SEO Management</h2>
        <p className="text-elite-text text-sm">Optimize your pages for search engines</p>
      </div>

      <div className="rounded-xl bg-[#161616] border border-white/5 p-6 space-y-6">
        <h3 className="text-lg font-medium text-elite-white">Page Metadata</h3>
        
        {['Home', 'About', 'Services', 'Projects'].map((page) => (
          <div key={page} className="p-4 rounded-lg border border-white/5 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-elite-white">{page} Page</h4>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs bg-green-500/10 text-green-400">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Optimized
              </span>
            </div>
            <div>
              <label className="text-xs text-elite-text mb-1 block">Title</label>
              <input
                type="text"
                defaultValue={`Elite Minds — ${page}`}
                className="w-full px-3 py-2 bg-white/5 border border-white/5 rounded-lg text-sm text-elite-white focus:outline-none focus:border-elite-accent/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-elite-text mb-1 block">Meta Description</label>
              <textarea
                defaultValue="Premium digital studio crafting exceptional experiences through strategy, design, and technology."
                rows={2}
                className="w-full px-3 py-2 bg-white/5 border border-white/5 rounded-lg text-sm text-elite-white focus:outline-none focus:border-elite-accent/50 transition-colors resize-none"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SettingsPanel() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-medium text-elite-white mb-1">Settings</h2>
        <p className="text-elite-text text-sm">Configure your website settings</p>
      </div>

      <div className="rounded-xl bg-[#161616] border border-white/5 p-6 space-y-6">
        <div>
          <h3 className="text-lg font-medium text-elite-white mb-4">General</h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-elite-text mb-1 block">Site Name</label>
              <input type="text" defaultValue="Elite Minds" className="w-full px-3 py-2 bg-white/5 border border-white/5 rounded-lg text-sm text-elite-white focus:outline-none focus:border-elite-accent/50 transition-colors" />
            </div>
            <div>
              <label className="text-xs text-elite-text mb-1 block">Tagline</label>
              <input type="text" defaultValue="Strategy. Design. Technology." className="w-full px-3 py-2 bg-white/5 border border-white/5 rounded-lg text-sm text-elite-white focus:outline-none focus:border-elite-accent/50 transition-colors" />
            </div>
            <div>
              <label className="text-xs text-elite-text mb-1 block">Contact Email</label>
              <input type="email" defaultValue="hello@eliteminds.studio" className="w-full px-3 py-2 bg-white/5 border border-white/5 rounded-lg text-sm text-elite-white focus:outline-none focus:border-elite-accent/50 transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6">
          <h3 className="text-lg font-medium text-elite-white mb-4">Social Links</h3>
          <div className="space-y-4">
            {['LinkedIn', 'Twitter', 'Dribbble', 'Instagram'].map((social) => (
              <div key={social}>
                <label className="text-xs text-elite-text mb-1 block">{social}</label>
                <input type="url" placeholder={`https://${social.toLowerCase()}.com/eliteminds`} className="w-full px-3 py-2 bg-white/5 border border-white/5 rounded-lg text-sm text-elite-white placeholder:text-elite-text/50 focus:outline-none focus:border-elite-accent/50 transition-colors" />
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-6">
          <button className="px-6 py-2.5 bg-elite-accent text-elite-black rounded-lg text-sm font-medium hover:bg-elite-accent-light transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
