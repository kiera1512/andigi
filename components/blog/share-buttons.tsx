"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { getShareUrls } from "@/lib/blog-utils";
import { Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const { addToast } = useToast();
  const shareUrls = getShareUrls(url, title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      addToast("Link copied to clipboard!", "success");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      addToast("Failed to copy link", "error");
    }
  };

  const handleShare = (platform: string, shareUrl: string) => {
    window.open(shareUrl, `share-${platform}`, "width=600,height=400");
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-medium text-muted-foreground">Share this article</p>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleShare("facebook", shareUrls.facebook)}
          aria-label="Share on Facebook"
          className="h-10 w-10"
        >
          <Facebook className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleShare("twitter", shareUrls.twitter)}
          aria-label="Share on Twitter"
          className="h-10 w-10"
        >
          <Twitter className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleShare("linkedin", shareUrls.linkedin)}
          aria-label="Share on LinkedIn"
          className="h-10 w-10"
        >
          <Linkedin className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleCopy}
          aria-label="Copy link"
          className="h-10 w-10"
        >
          {copied ? (
            <Check className="h-4 w-4 text-success" />
          ) : (
            <Link2 className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
