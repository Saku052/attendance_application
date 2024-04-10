import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export const SidebarData = [
    {
        title: 'ホーム',
        path: <HomeIcon />,
        link: '/Home'
    },
    {
        title: '概要',
        path: <InfoIcon />,
        link: '/About'
    },
    {
        title: '連絡先',
        path: <ContactMailIcon />,
        link: '/Contact'
    }
]

