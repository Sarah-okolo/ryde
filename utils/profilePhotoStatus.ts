import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useState } from "react";

export default function ProfilePhotoStatus() {
  const [hasProfilePhoto, setHasProfilePhoto] = useState(true);
  const profilePhoto = hasProfilePhoto
    ? images.profilePhoto
    : icons.noProfilePhoto;

  return profilePhoto;
}
