import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import { SvgIconProps } from '@mui/material';

export const socialNetworks: Record<string, SvgIconProps> = {
  twitter: <TwitterIcon />,
  facebook: <FacebookIcon />,
  instagram: <InstagramIcon />,
  telegram: <TelegramIcon />,
};

export const BASE_URL = 'http://localhost:3001';
