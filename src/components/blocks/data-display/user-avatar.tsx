import { cn } from "@/lib/utils";
import React from "react";
import * as UI from "@/components/core";
import { UserRoundXIcon } from "lucide-react";
import { shortName } from "@/utils/functions/short-name";

export interface UserAvatarProps
  extends React.ComponentPropsWithoutRef<typeof UI.AvatarImage> {}

export const UserAvatar = React.forwardRef<
  React.ComponentRef<typeof UI.AvatarImage>,
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
        <UI.Avatar
          {...props}
          ref={ref}
          data-testid="avatar-root"
          className={cn("bg-accent", className)}
        >
          <UserRoundXIcon data-testid="avatar-icon" />
        </UI.Avatar>
      );
    }

    return (
      <UI.Avatar
        {...props}
        ref={ref}
        data-testid="avatar-root"
        className={cn("bg-accent", className)}
      >
        <UI.AvatarImage src={src} alt={alt} />
        <UI.AvatarFallback>{shortName(alt)}</UI.AvatarFallback>
      </UI.Avatar>
    );
  }
);

UserAvatar.displayName = "UserAvatar";
