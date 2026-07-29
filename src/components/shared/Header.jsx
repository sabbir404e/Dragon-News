import logo from '@/assets/logo.png';
import Image from 'next/image';
import { compareAsc, format } from "date-fns";

const HeaderPage = () => {
    return (
        <div className='text-center py-8 space-y-8'>
            <Image src={logo} width={300} height={200} alt="Logo" className='mx-auto'></Image>
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMM dd yyyy")}</p>
        </div>
    );
};

export default HeaderPage;