import { Route, Routes } from 'react-router-dom';
import RedirectModule from '../hook/RedirectComponent';
import PageTest from '../test/page';
import PageHome from '../page/home/page';
import RegisterPage from '../page/auth/register/page'
import LoginPage from '../page/auth/login/page';
import ReferralDashboardPage from '../page/referring/page';
import ReferProgramPage from '../page/referring/info/page';
import ProgressPage from '../page/referring/progress/page';
import RewardsPage from '../page/referring/prizes/page';
import ReferralWelcome from '../page/referred/page';
export const RouterContainer = () => {
    return (
        <div className='tracking-wider gothamMedium'>
            <Routes>
                <Route path='/' element={<RedirectModule route='/home' />} />
                <Route path='/home' element={<PageHome />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/referring' element={<ReferralDashboardPage />} />
                <Route path='/referring/info' element={<ReferProgramPage />} />
                <Route path='/referring/progress' element={<ProgressPage />} />
                <Route path='/referring/prizes' element={<RewardsPage />} />
                <Route path='/referred' element={<ReferralWelcome />} />
                <Route path='/test' element={<PageTest />} />
            </Routes>
        </div>
    )
}