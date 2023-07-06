import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src="/images/banner/banner.png" />
      <BannerContent>
        <Typography variant="h6">Welcome to</Typography>
        <BannerTitle variant="h2">
          Wildcraft
        </BannerTitle>

        <BannerDescription variant="subtitle">
          At the store there is a collection of varity of bags such as the school bags,backpack,travel bags,laptop bags,etc.
        </BannerDescription>

        <BannerShopButton color="primary">Shop Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
