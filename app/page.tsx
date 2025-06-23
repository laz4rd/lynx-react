'use client'

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import * as React from "react"
import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function LandingPage() {
  return (
    <div className="max-w-md w-full mx-auto px-4 pt-12 space-y-6">
      {/* Avatar */}
      <div className="flex justify-center">
        <Avatar className="w-24 h-24">
          <AvatarImage src="/X4.png" />
          <AvatarFallback>BS</AvatarFallback>
        </Avatar>
      </div>

      {/* Intro Text */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">Hi, I'm Brijraj Singh Bhati</h1>
        <p className="text-black-500 mt-2 text-sm font-light">
          A builder, developer, and student who dreams in code and builds in full metal — crafting ideas into real, working products.
        </p>
      </div>

      <Separator className="my-4" />

      {/* CTA Button */}
      <div className="flex justify-center">
        <Button asChild variant="secondary">
          <a href="/lynx">Explore My Work</a>
        </Button>
      </div>
    </div>
  )
}
