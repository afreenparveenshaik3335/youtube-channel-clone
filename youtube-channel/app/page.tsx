"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Search,
  Bell,
  Menu,
  Home,
  Compass,
  PlaySquare,
  Clock,
  ThumbsUp,
  Share,
  Download,
  MoreHorizontal,
  Play,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const videos = [
  {
    id: 1,
    title: "Building a Full-Stack App with Next.js 15",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=320&h=180&fit=crop",
    duration: "24:15",
    views: "125K",
    uploadDate: "2 days ago",
    description:
      "Learn how to build a complete full-stack application using the latest Next.js 15 features including Server Components and App Router.",
  },
  {
    id: 2,
    title: "React Server Components Explained",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=320&h=180&fit=crop",
    duration: "18:42",
    views: "89K",
    uploadDate: "1 week ago",
    description:
      "Deep dive into React Server Components and how they revolutionize the way we build React applications.",
  },
  {
    id: 3,
    title: "TypeScript Tips for Better Code",
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=320&h=180&fit=crop",
    duration: "15:30",
    views: "67K",
    uploadDate: "2 weeks ago",
    description: "Essential TypeScript tips and tricks that will make your code more robust and maintainable.",
  },
  {
    id: 4,
    title: "Tailwind CSS Advanced Techniques",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&h=180&fit=crop",
    duration: "22:18",
    views: "94K",
    uploadDate: "3 weeks ago",
    description: "Advanced Tailwind CSS techniques for creating beautiful and responsive user interfaces.",
  },
  {
    id: 5,
    title: "Database Design Best Practices",
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=320&h=180&fit=crop",
    duration: "28:45",
    views: "156K",
    uploadDate: "1 month ago",
    description: "Learn the fundamental principles of database design and how to structure your data effectively.",
  },
  {
    id: 6,
    title: "API Development with Node.js",
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=320&h=180&fit=crop",
    duration: "31:22",
    views: "203K",
    uploadDate: "1 month ago",
    description: "Complete guide to building robust APIs with Node.js, Express, and modern best practices.",
  },
]

export default function YouTubeChannel() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0])
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <Play className="h-5 w-5 text-white fill-white" />
              </div>
              <span className="text-xl font-semibold">DevTube</span>
            </Link>
          </div>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex">
              <Input placeholder="Search" className="rounded-r-none border-r-0 focus-visible:ring-0" />
              <Button variant="outline" className="rounded-l-none px-6 bg-transparent">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-6 w-6" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 h-screen sticky top-16 bg-white border-r overflow-y-auto">
          <nav className="p-3">
            <div className="space-y-1">
              <Button
                variant={activeSection === "home" ? "secondary" : "ghost"}
                className="w-full justify-start gap-6 px-3"
                onClick={() => setActiveSection("home")}
              >
                <Home className="h-6 w-6" />
                Home
              </Button>
              <Button
                variant={activeSection === "explore" ? "secondary" : "ghost"}
                className="w-full justify-start gap-6 px-3"
                onClick={() => setActiveSection("explore")}
              >
                <Compass className="h-6 w-6" />
                Explore
              </Button>
              <Button
                variant={activeSection === "subscriptions" ? "secondary" : "ghost"}
                className="w-full justify-start gap-6 px-3"
                onClick={() => setActiveSection("subscriptions")}
              >
                <PlaySquare className="h-6 w-6" />
                Subscriptions
              </Button>
              <Button
                variant={activeSection === "watchlater" ? "secondary" : "ghost"}
                className="w-full justify-start gap-6 px-3"
                onClick={() => setActiveSection("watchlater")}
              >
                <Clock className="h-6 w-6" />
                Watch Later
              </Button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {activeSection === "home" && (
            <>
              {/* Channel Header */}
              <div className="relative">
                <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                <div className="px-6 py-4">
                  <div className="flex items-start gap-6">
                    <Avatar className="h-20 w-20 border-4 border-white -mt-10">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                      <AvatarFallback>DT</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h1 className="text-3xl font-bold">DevTube Channel</h1>
                      <p className="text-muted-foreground">@devtube • 1.2M subscribers • 156 videos</p>
                      <p className="mt-2 text-sm">
                        Welcome to DevTube! Your go-to channel for web development tutorials, coding tips, and the
                        latest in tech. New videos every week!
                      </p>
                    </div>
                    <Button
                      onClick={() => setIsSubscribed(!isSubscribed)}
                      variant={isSubscribed ? "outline" : "default"}
                      className={isSubscribed ? "" : "bg-red-600 hover:bg-red-700"}
                    >
                      {isSubscribed ? "Subscribed" : "Subscribe"}
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Channel Content */}
              <div className="p-6">
                <Tabs defaultValue="videos" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="videos">Videos</TabsTrigger>
                    <TabsTrigger value="playlists">Playlists</TabsTrigger>
                    <TabsTrigger value="community">Community</TabsTrigger>
                    <TabsTrigger value="about">About</TabsTrigger>
                  </TabsList>

                  <TabsContent value="videos" className="mt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Featured Video Player */}
                      <div className="lg:col-span-2">
                        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                          <video className="w-full h-full" controls poster={selectedVideo.thumbnail}>
                            <source
                              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>

                        <div className="mt-4">
                          <h2 className="text-xl font-semibold mb-2">{selectedVideo.title}</h2>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{selectedVideo.views} views</span>
                              <span>{selectedVideo.uploadDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm">
                                <ThumbsUp className="h-4 w-4 mr-2" />
                                Like
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Share className="h-4 w-4 mr-2" />
                                Share
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          <div className="bg-muted rounded-lg p-4">
                            <p className="text-sm">{selectedVideo.description}</p>
                          </div>

                          {/* Comments Section */}
                          <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-4">Comments</h3>
                            <div className="space-y-4">
                              <div className="flex gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                                  <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-medium text-sm">@johndoe</span>
                                    <span className="text-xs text-muted-foreground">2 hours ago</span>
                                  </div>
                                  <p className="text-sm">
                                    Great tutorial! This really helped me understand the concepts better.
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                                  <AvatarFallback>AS</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-medium text-sm">@alexsmith</span>
                                    <span className="text-xs text-muted-foreground">5 hours ago</span>
                                  </div>
                                  <p className="text-sm">Could you make a follow-up video on advanced patterns?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Video Sidebar */}
                      <div className="space-y-4">
                        <h3 className="font-semibold">More Videos</h3>
                        {videos
                          .filter((v) => v.id !== selectedVideo.id)
                          .map((video) => (
                            <div
                              key={video.id}
                              className="flex gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded-lg transition-colors"
                              onClick={() => setSelectedVideo(video)}
                            >
                              <div className="relative">
                                <Image
                                  src={
                                    video.thumbnail ||
                                    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=320&h=180&fit=crop&crop=center" ||
                                    "/placeholder.svg"
                                  }
                                  alt={video.title}
                                  width={120}
                                  height={68}
                                  className="rounded-lg object-cover"
                                />
                                <Badge
                                  variant="secondary"
                                  className="absolute bottom-1 right-1 text-xs bg-black/80 text-white"
                                >
                                  {video.duration}
                                </Badge>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm line-clamp-2 mb-1">{video.title}</h4>
                                <p className="text-xs text-muted-foreground">DevTube Channel</p>
                                <p className="text-xs text-muted-foreground">
                                  {video.views} views • {video.uploadDate}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="playlists" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-muted rounded-lg p-4">
                        <h3 className="font-semibold mb-2">React Fundamentals</h3>
                        <p className="text-sm text-muted-foreground mb-4">12 videos • 2.5 hours</p>
                        <div className="aspect-video mb-4 relative">
                          <Image
                            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=320&h=180&fit=crop"
                            alt="React Fundamentals Playlist"
                            width={320}
                            height={180}
                            className="rounded object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-black/20 rounded flex items-center justify-center">
                            <div className="bg-black/80 text-white px-2 py-1 rounded text-sm">12 videos</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          View Playlist
                        </Button>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <h3 className="font-semibold mb-2">Next.js Mastery</h3>
                        <p className="text-sm text-muted-foreground mb-4">8 videos • 3.2 hours</p>
                        <div className="aspect-video mb-4 relative">
                          <Image
                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=320&h=180&fit=crop"
                            alt="Next.js Mastery Playlist"
                            width={320}
                            height={180}
                            className="rounded object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-black/20 rounded flex items-center justify-center">
                            <div className="bg-black/80 text-white px-2 py-1 rounded text-sm">8 videos</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          View Playlist
                        </Button>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <h3 className="font-semibold mb-2">TypeScript Deep Dive</h3>
                        <p className="text-sm text-muted-foreground mb-4">15 videos • 4.1 hours</p>
                        <div className="aspect-video mb-4 relative">
                          <Image
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=320&h=180&fit=crop"
                            alt="TypeScript Deep Dive Playlist"
                            width={320}
                            height={180}
                            className="rounded object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-black/20 rounded flex items-center justify-center">
                            <div className="bg-black/80 text-white px-2 py-1 rounded text-sm">15 videos</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          View Playlist
                        </Button>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <h3 className="font-semibold mb-2">CSS & Styling</h3>
                        <p className="text-sm text-muted-foreground mb-4">10 videos • 2.8 hours</p>
                        <div className="aspect-video mb-4 relative">
                          <Image
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&h=180&fit=crop"
                            alt="CSS & Styling Playlist"
                            width={320}
                            height={180}
                            className="rounded object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-black/20 rounded flex items-center justify-center">
                            <div className="bg-black/80 text-white px-2 py-1 rounded text-sm">10 videos</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          View Playlist
                        </Button>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <h3 className="font-semibold mb-2">Backend Development</h3>
                        <p className="text-sm text-muted-foreground mb-4">18 videos • 5.5 hours</p>
                        <div className="aspect-video mb-4 relative">
                          <Image
                            src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=320&h=180&fit=crop"
                            alt="Backend Development Playlist"
                            width={320}
                            height={180}
                            className="rounded object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-black/20 rounded flex items-center justify-center">
                            <div className="bg-black/80 text-white px-2 py-1 rounded text-sm">18 videos</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          View Playlist
                        </Button>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <h3 className="font-semibold mb-2">Database Design</h3>
                        <p className="text-sm text-muted-foreground mb-4">7 videos • 3.2 hours</p>
                        <div className="aspect-video mb-4 relative">
                          <Image
                            src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=320&h=180&fit=crop"
                            alt="Database Design Playlist"
                            width={320}
                            height={180}
                            className="rounded object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-black/20 rounded flex items-center justify-center">
                            <div className="bg-black/80 text-white px-2 py-1 rounded text-sm">7 videos</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          View Playlist
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="community" className="mt-6">
                    <div className="space-y-6">
                      {/* Community Post 1 - Text Post */}
                      <div className="border rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                            <AvatarFallback>DT</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-semibold">DevTube Channel</span>
                              <span className="text-sm text-muted-foreground">3 days ago</span>
                            </div>
                            <p className="mb-4">
                              🎉 Exciting news! We just hit 1.2M subscribers! Thank you all for your incredible support.
                              What topics would you like to see covered in our upcoming tutorials? Drop your suggestions
                              below! #WebDev #Programming #Community
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <button className="flex items-center gap-1 hover:text-foreground">
                                <ThumbsUp className="h-4 w-4" />
                                1.2K
                              </button>
                              <button className="hover:text-foreground">Reply</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Community Post 2 - Image Post */}
                      <div className="border rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                            <AvatarFallback>DT</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-semibold">DevTube Channel</span>
                              <span className="text-sm text-muted-foreground">1 week ago</span>
                            </div>
                            <p className="mb-4">
                              Behind the scenes of our latest video setup! New lighting and camera equipment to bring
                              you even better content quality 📹✨
                            </p>
                            <div className="mb-4">
                              <Image
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
                                alt="Studio setup"
                                width={600}
                                height={400}
                                className="rounded-lg object-cover w-full max-w-md"
                              />
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <button className="flex items-center gap-1 hover:text-foreground">
                                <ThumbsUp className="h-4 w-4" />
                                856
                              </button>
                              <button className="hover:text-foreground">Reply</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Community Post 3 - Poll */}
                      <div className="border rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                            <AvatarFallback>DT</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-semibold">DevTube Channel</span>
                              <span className="text-sm text-muted-foreground">2 weeks ago</span>
                            </div>
                            <p className="mb-4">What should be our next deep-dive series? Help us decide! 🤔</p>
                            <div className="space-y-2 mb-4">
                              <div className="border rounded-lg p-3 hover:bg-muted/50 cursor-pointer">
                                <div className="flex justify-between items-center">
                                  <span>Advanced React Patterns</span>
                                  <span className="text-sm text-muted-foreground">45%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2 mt-2">
                                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                                </div>
                              </div>
                              <div className="border rounded-lg p-3 hover:bg-muted/50 cursor-pointer">
                                <div className="flex justify-between items-center">
                                  <span>Node.js Microservices</span>
                                  <span className="text-sm text-muted-foreground">35%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2 mt-2">
                                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "35%" }}></div>
                                </div>
                              </div>
                              <div className="border rounded-lg p-3 hover:bg-muted/50 cursor-pointer">
                                <div className="flex justify-between items-center">
                                  <span>DevOps & Deployment</span>
                                  <span className="text-sm text-muted-foreground">20%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2 mt-2">
                                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: "20%" }}></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>2,341 votes</span>
                              <button className="hover:text-foreground">Vote</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Community Post 4 - Video Announcement */}
                      <div className="border rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                            <AvatarFallback>DT</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-semibold">DevTube Channel</span>
                              <span className="text-sm text-muted-foreground">3 weeks ago</span>
                            </div>
                            <p className="mb-4">
                              🚀 New video dropping tomorrow at 2 PM EST! We're covering the latest Next.js 15 features
                              that will change how you build web apps. Set your reminders! 🔔
                            </p>
                            <div className="flex gap-2 mb-4">
                              <Badge variant="secondary">#NextJS</Badge>
                              <Badge variant="secondary">#WebDev</Badge>
                              <Badge variant="secondary">#Tutorial</Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <button className="flex items-center gap-1 hover:text-foreground">
                                <ThumbsUp className="h-4 w-4" />
                                2.1K
                              </button>
                              <button className="hover:text-foreground">Reply</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="about" className="mt-6">
                    <div className="max-w-2xl">
                      <h3 className="text-lg font-semibold mb-4">About DevTube Channel</h3>
                      <p className="mb-4">
                        Welcome to DevTube, your ultimate destination for web development tutorials and coding
                        education. We cover everything from beginner-friendly introductions to advanced development
                        techniques.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Joined:</strong> Jan 15, 2020
                        </div>
                        <div>
                          <strong>Total views:</strong> 15.2M
                        </div>
                        <div>
                          <strong>Country:</strong> United States
                        </div>
                        <div>
                          <strong>Upload schedule:</strong> Weekly
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </>
          )}

          {activeSection === "explore" && (
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-6">Explore</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Trending</h3>
                  <p className="text-sm opacity-90">See what's popular right now</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Music</h3>
                  <p className="text-sm opacity-90">Latest music videos and hits</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Gaming</h3>
                  <p className="text-sm opacity-90">Gaming content and streams</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Learning</h3>
                  <p className="text-sm opacity-90">Educational content</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4">Trending Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {videos.map((video) => (
                  <div key={video.id} className="cursor-pointer hover:scale-105 transition-transform">
                    <div className="relative">
                      <Image
                        src={
                          video.thumbnail ||
                          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=320&h=180&fit=crop&crop=center" ||
                          "/placeholder.svg"
                        }
                        alt={video.title}
                        width={320}
                        height={180}
                        className="rounded-lg object-cover w-full"
                      />
                      <Badge variant="secondary" className="absolute bottom-2 right-2 text-xs bg-black/80 text-white">
                        {video.duration}
                      </Badge>
                    </div>
                    <div className="mt-3">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">{video.title}</h4>
                      <p className="text-xs text-muted-foreground">DevTube Channel</p>
                      <p className="text-xs text-muted-foreground">
                        {video.views} views • {video.uploadDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "subscriptions" && (
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-6">Subscriptions</h1>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                    <AvatarFallback>TC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">TechCrunch</h3>
                    <p className="text-sm text-muted-foreground">2.1M subscribers</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Subscribed
                  </Button>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                    <AvatarFallback>FCC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">freeCodeCamp.org</h3>
                    <p className="text-sm text-muted-foreground">8.5M subscribers</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Subscribed
                  </Button>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                    <AvatarFallback>WDS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">Web Dev Simplified</h3>
                    <p className="text-sm text-muted-foreground">1.2M subscribers</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Subscribed
                  </Button>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Latest from your subscriptions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.slice(0, 6).map((video) => (
                  <div key={video.id} className="cursor-pointer hover:scale-105 transition-transform">
                    <div className="relative">
                      <Image
                        src={
                          video.thumbnail ||
                          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=320&h=180&fit=crop&crop=center" ||
                          "/placeholder.svg"
                        }
                        alt={video.title}
                        width={320}
                        height={180}
                        className="rounded-lg object-cover w-full"
                      />
                      <Badge variant="secondary" className="absolute bottom-2 right-2 text-xs bg-black/80 text-white">
                        {video.duration}
                      </Badge>
                    </div>
                    <div className="mt-3 flex gap-3">
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                        <AvatarFallback>DT</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">{video.title}</h4>
                        <p className="text-xs text-muted-foreground">DevTube Channel</p>
                        <p className="text-xs text-muted-foreground">
                          {video.views} views • {video.uploadDate}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "watchlater" && (
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-6">Watch Later</h1>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                    <Clock className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Watch Later</h2>
                    <p className="text-muted-foreground">3 videos • Private</p>
                  </div>
                </div>
                <Button variant="outline">Play all</Button>
              </div>

              <div className="space-y-4">
                {videos.slice(0, 3).map((video, index) => (
                  <div key={video.id} className="flex gap-4 p-4 hover:bg-muted/50 rounded-lg transition-colors">
                    <div className="flex items-center justify-center w-8 text-sm text-muted-foreground">
                      {index + 1}
                    </div>
                    <div className="relative">
                      <Image
                        src={
                          video.thumbnail ||
                          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=320&h=180&fit=crop&crop=center" ||
                          "/placeholder.svg"
                        }
                        alt={video.title}
                        width={160}
                        height={90}
                        className="rounded-lg object-cover"
                      />
                      <Badge variant="secondary" className="absolute bottom-1 right-1 text-xs bg-black/80 text-white">
                        {video.duration}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{video.title}</h4>
                      <p className="text-sm text-muted-foreground mb-1">DevTube Channel</p>
                      <p className="text-sm text-muted-foreground">
                        {video.views} views • {video.uploadDate}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              {videos.length === 0 && (
                <div className="text-center py-12">
                  <Clock className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No videos saved</h3>
                  <p className="text-muted-foreground">Videos you save to watch later will appear here</p>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
