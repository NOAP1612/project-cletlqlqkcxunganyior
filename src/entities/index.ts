import { superdevClient } from "@/lib/superdev/client";

export const Post = superdevClient.entity("Post");
export const User = superdevClient.auth;
