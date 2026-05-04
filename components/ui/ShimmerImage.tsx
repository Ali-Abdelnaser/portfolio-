"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

interface ShimmerImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  imageKey?: string;
  className?: string;
  wrapperClassName?: string;
}

export function ShimmerImage({
  src,
  alt,
  fill = false,
  width,
  height,
  sizes,
  priority = false,
  loading,
  imageKey,
  className,
  wrapperClassName,
}: ShimmerImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={clsx(
        "relative overflow-hidden",
        fill && "h-full w-full",
        wrapperClassName
      )}
    >
      {!isLoaded && <div className="shimmer-surface absolute inset-0" aria-hidden="true" />}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        loading={loading}
        key={imageKey ?? src}
        onLoad={() => setIsLoaded(true)}
        className={clsx(
          "transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
      />
    </div>
  );
}
