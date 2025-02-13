import { cn } from "@/lib/utils";
import React from "react";
import { UserRoundXIcon } from "lucide-react";
import { shortName } from "@/utils/functions/short-name";
import * as AV from "@/components/core/data-display/avatar";

export interface UserAvatarProps
  extends React.ComponentPropsWithoutRef<typeof AV.AvatarImage> {}

export const UserAvatar = React.forwardRef<
  React.ComponentRef<typeof AV.AvatarImage>,
  UserAvatarProps
>(
  (
    {
      className,
      src = "https://github.com/matheussatoshi.png",
      alt = "MS",
      ...props
    },
    ref
  ) => {
    if (!alt && !src) {
      return (
        <AV.Avatar
          {...props}
          ref={ref}
          data-testid="avatar-root"
          className={cn("bg-accent", className)}
        >
          <UserRoundXIcon data-testid="avatar-icon" />
        </AV.Avatar>
      );
    }

    return (
      <AV.Avatar
        {...props}
        ref={ref}
        data-testid="avatar-root"
        className={cn("bg-accent", className)}
      >
        <AV.AvatarImage src={src} alt={alt} />
        <AV.AvatarFallback>{shortName(alt)}</AV.AvatarFallback>
      </AV.Avatar>
    );
  }
);

UserAvatar.displayName = "UserAvatar";
