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
      {/* Profile Section */}
      <div className="text-center space-y-4">
        <Avatar className="w-20 h-20 mx-auto">
          <AvatarImage src="X4.png" />
          <AvatarFallback>BS</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-bold">Brijraj Singh Bhati</h1>
        <p className="text-gray-500"><i>Dreams in Code, Builds in Full Metal</i></p>
      </div>

      {/* Navigation */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">X4 Card</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">...</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Brijraj Singh Bhati</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Lynx</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Projects Section */}
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
                  <DrawerTitle>Proceed to Page</DrawerTitle>
                  <DrawerDescription>X4 is a personal space where I curate and showcase my work, serving as a comprehensive portfolio that highlights my creativity, technical skills, and innovative projects.</DrawerDescription>
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
                  <DrawerDescription asChild>
                    <Avatar className="w-20 h-20 mx-auto">
                      <AvatarImage src="X4MD.png" />
                      <AvatarFallback>X4MD</AvatarFallback>
                    </Avatar>
                  </DrawerDescription>
                  <DrawerDescription>X4MD is a AI-Assisted Command Line Interface written in python using Ollama's lightweight Gemma3:1b Model</DrawerDescription>
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

        <Card>
          <CardHeader>
            <CardTitle>GPA Calculator</CardTitle>
            <CardDescription>Calculator For NMIMS Students</CardDescription>
            <CardAction>Tool</CardAction>
          </CardHeader>
          <CardContent>
            <p>The GPA Calculator App is a smart and student-friendly tool that helps users plan their academic performance by allowing them to input their (ICA) marks and instantly calculating the minimum score needed in the (TEE) to pass or reach a specific academic threshold</p>
          </CardContent>
          <CardFooter>
            <Drawer>
              <DrawerTrigger className="w-full" asChild>
                <Button>Visit</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Launch Tool?</DrawerTitle>
                  <DrawerDescription asChild>
                    <Avatar className="w-20 h-20 mx-auto">
                      <AvatarImage src="GPA.png" />
                      <AvatarFallback>GPA</AvatarFallback>
                    </Avatar>
                  </DrawerDescription>
                  <DrawerDescription>
                    <p>The GPA Calculator App is a smart and student-friendly tool that helps users plan their academic performance</p>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button asChild>
                    <a href="https://gpa-calculator-36.web.app/">Launch</a>
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