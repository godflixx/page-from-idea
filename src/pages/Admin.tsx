
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('adminLoggedIn') === 'true';
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  // Simple admin credentials (in a real app, this would be handled by backend)
  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "admin123";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem('adminLoggedIn', 'true');
      setIsLoggedIn(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard!",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
    });
  };

  const goHome = () => {
    navigate("/");
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
            <div className="mt-4 text-center">
              <Button variant="ghost" onClick={goHome}>
                Back to Home
              </Button>
            </div>
            <div className="mt-4 p-3 bg-muted rounded-md text-sm text-muted-foreground">
              <p><strong>Demo Credentials:</strong></p>
              <p>Username: admin</p>
              <p>Password: admin123</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={goHome}>
                Go to Website
              </Button>
              <Button variant="destructive" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Dashboard Cards */}
          <Card>
            <CardHeader>
              <CardTitle>Total Users</CardTitle>
              <CardDescription>Registered users on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,234</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Projects</CardTitle>
              <CardDescription>Currently running projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">56</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
              <CardDescription>Total revenue this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$12,345</div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common admin tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Button className="h-20 flex-col space-y-2">
                  <span className="text-lg">👥</span>
                  <span>Manage Users</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <span className="text-lg">📊</span>
                  <span>View Analytics</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <span className="text-lg">⚙️</span>
                  <span>Settings</span>
                </Button>
                <Button className="h-20 flex-col space-y-2" variant="outline">
                  <span className="text-lg">📝</span>
                  <span>Content Management</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Admin;
