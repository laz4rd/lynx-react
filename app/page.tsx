'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"

export default function HomePage() {

  return (
    
    <div className="max-w-md w-full space-y-4">
      <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">X4 Card</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">...</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Brijraj Singh Bhati</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Lynx</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

      <Avatar className="w-20 h-20 mx-auto">
        <AvatarImage src="app/assets/x4-256.png" />
        <AvatarFallback>BS</AvatarFallback>
      </Avatar>
      <h1 className="text-xl font-bold text-center">Brijraj Singh Bhati</h1>
      <p className="text-gray-500 text-center">Creating a minimal link hub</p>      

      <div className="space-y-2">
            <Card>
              <CardHeader>
                <CardTitle>X4 Creative</CardTitle>
                <CardDescription>Personal Portfolio</CardDescription>
                <CardAction>Webpage</CardAction>
              </CardHeader>
              <CardContent>
                <p>X4 is a personal space where I curate and showcase my work, serving as a comprehensive portfolio that highlights my creativity, technical skills, and innovative projects.</p>
                </CardContent>
                <CardFooter>
                  <Drawer>
                    <DrawerTrigger className="w-full" asChild>
                      <Button>Visit</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>
                        <DrawerTitle>Proceed to link</DrawerTitle>
                        <DrawerDescription>You Will Now Visit X4 Creatives Page</DrawerDescription>
                      </DrawerHeader>
                      <DrawerFooter>
                        <Button asChild>
                          <a href="https://x4creative.framer.website">Proceed</a>
                        </Button>
                        <DrawerClose>
                          <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </CardFooter>
              </Card>


              <Card>
              <CardHeader>
                <CardTitle>X4MD</CardTitle>
                <CardDescription>AI-Assisted Command Line Interface</CardDescription>
                <CardAction>Software</CardAction>
              </CardHeader>
              <CardContent>
                <p>X4MD is a AI-Assisted Command Line Interface written in python using Ollama's lightweight Gemma3:1b Model</p>
                </CardContent>
                <CardFooter>
                  <Drawer>
                    <DrawerTrigger className="w-full" asChild>
                      <Button>Visit</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>
                        <DrawerTitle>Proceed to link</DrawerTitle>
                        <DrawerDescription>You Will Now Visit X4MD</DrawerDescription>
                      </DrawerHeader>
                      <DrawerFooter>
                        <Button asChild>
                          <a href="https://x4md.framer.website">Proceed</a>
                        </Button>
                        <DrawerClose>
                          <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </CardFooter>
              </Card>
  
      </div>
    </div>
  )
}
