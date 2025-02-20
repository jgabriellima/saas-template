"use client"

import { UserButton } from "@clerk/nextjs"

export function UserProfileButton() {
    return (
        <UserButton
            afterSignOutUrl="/"
            appearance={{
                elements: {
                    avatarBox: "w-8 h-8"
                }
            }}
        />
    )
} 