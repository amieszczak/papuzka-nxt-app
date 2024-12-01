import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/o-nas',
                destination: '/pages/o-nas',
            },
            {
                source: '/kontakt',
                destination: '/pages/kontakt',
            },
            {
                source: '/artykuly',
                destination: '/pages/artykuly',
            },
            {
                source: '/konsultacja-logopedyczna',
                destination: '/pages/oferta/konsultacja-logopedyczna',
            },
            {
                source: '/terapia-logopedyczna',
                destination: '/pages/oferta/terapia-logopedyczna',
            },
            {
                source: '/trening-umiejetnosci-spolecznych',
                destination: '/pages/oferta/trening-umiejetnosci-spolecznych',
            },
            {
                source: '/terapia-reki',
                destination: '/pages/oferta/terapia-reki',
            },
            {
                source: '/wystawienie-pisemnej-opinii',
                destination: '/pages/oferta/wystawienie-pisemnej-opinii',
            },
        ]
    },
};



export default withNextVideo(nextConfig);
