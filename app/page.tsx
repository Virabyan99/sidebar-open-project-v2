"use client";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Sidebar from "@/components/ui/Sidebar";
import Toolbar from "@/components/ui/Toolbar";
import { Calendar, Star, Send } from "lucide-react";

const SIDEBAR_WIDTH = 256;
const TOOLBAR_HEIGHT = 64;

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const mainStyles = useSpring({
    paddingRight: isOpen ? SIDEBAR_WIDTH : 0,
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="relative min-h-screen bg-background flex">
      <animated.div
        style={mainStyles}
        className="relative z-0 pt-16 flex-1 min-w-0"
      >
        <div className="p-6 space-y-8">
          {/* Headings */}
          <section>
            <h1 className="text-3xl font-bold tracking-tight">Complex Dashboard</h1>
            <h2 className="text-2xl font-semibold mt-4">Interactive Components</h2>
            <h3 className="text-xl font-medium mt-2">Overview</h3>
          </section>

          {/* Tabs */}
          <section>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>Overview Tab</CardTitle>
                    <CardDescription>Summary of key information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      This tab displays a summary. The content adjusts when the sidebar opens, ensuring responsiveness across different screen sizes.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analytics">
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics Tab</CardTitle>
                    <CardDescription>Data insights</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Analytics data with charts and metrics would be displayed here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reports">
                <Card>
                  <CardHeader>
                    <CardTitle>Reports Tab</CardTitle>
                    <CardDescription>Detailed reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Reports section with downloadable content.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* Accordion */}
          <section>
            <h3 className="text-xl font-medium mb-4">FAQ Section</h3>
            <Accordion type="single" collapsible className="w-full max-w-2xl">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does the sidebar affect layout?</AccordionTrigger>
                <AccordionContent>
                  The sidebar reduces the main content width by adding padding-right, causing all elements to adjust responsively without overflowing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is the layout responsive?</AccordionTrigger>
                <AccordionContent>
                  Yes, the layout uses flexbox and grid with Tailwind utilities to ensure responsiveness across devices.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What components are included?</AccordionTrigger>
                <AccordionContent>
                  This page includes tabs, accordion, forms, tables, cards, images, and a modal dialog to test complex layouts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Form */}
          <section>
            <h3 className="text-xl font-medium mb-4">User Input Form</h3>
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Submit your details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Send className="mr-2 h-4 w-4" />
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </section>

          {/* Dynamic Counter */}
          <section>
            <h3 className="text-xl font-medium mb-4">Dynamic Counter</h3>
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>Counter</CardTitle>
                <CardDescription>Test state updates</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Current count: {counter}</p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button onClick={() => setCounter(counter + 1)}>Increment</Button>
                <Button variant="outline" onClick={() => setCounter(counter - 1)}>Decrement</Button>
              </CardFooter>
            </Card>
          </section>

          {/* Table */}
          <section>
            <h3 className="text-xl font-medium mb-4">Data Table</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Project A</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>2025-08-01</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Project B</TableCell>
                  <TableCell>Inactive</TableCell>
                  <TableCell>2025-07-15</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>Project C</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>2025-06-20</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          {/* Nested Grid with Cards */}
          <section>
            <h3 className="text-xl font-medium mb-4">Nested Grid</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>Nested Card {i}</CardTitle>
                    <CardDescription>Card {i} content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline">Sub-action</Button>
                      <Button variant="ghost">Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Image Gallery */}
          <section>
            <h3 className="text-xl font-medium mb-4">Image Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://images.unsplash.com/photo-1571203483902-4ee1555f0777?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1649016350046-264f8c9e08fe?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://media.istockphoto.com/id/105864927/photo/back-roads-in-classic-ride.jpg?s=1024x1024&w=is&k=20&c=l4mThO_het2NYVASTxAR3-sc9QGaj8zoIXfuC0VeXqQ=",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-48 object-cover rounded-md shadow-md"
                />
              ))}
            </div>
          </section>

          {/* Modal Dialog */}
          <section>
            <h3 className="text-xl font-medium mb-4">Modal Dialog</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Modal</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Sample Modal</DialogTitle>
                  <DialogDescription>
                    This modal tests overlay behavior when the sidebar is open.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <p>Content inside the modal remains unaffected by the sidebar.</p>
                  <Button variant="outline">Close</Button>
                </div>
              </DialogContent>
            </Dialog>
          </section>
        </div>
      </animated.div>
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Toolbar onToggle={() => setIsOpen((prev) => !prev)} />
    </div>
  );
};

export default HomePage;