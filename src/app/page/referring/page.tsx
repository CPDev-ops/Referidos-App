import { ContainerPages } from "../../shared/ContainerPages";
import { SidebarPage } from "../../shared/ResponsiveSidebar";
import EmailInviteCard from "./components/EmailInviteCard";
import HeaderBar from "./components/HeaderBar";
import ProgressCard from "./components/ProgressCard";
import ReferralLinkCard from "./components/ReferralLinkCard";
import StatsCards from "./components/StatsCards";

const ReferralDashboardPage = () => {
    return (
        <SidebarPage>
            <ContainerPages className="bg-[#0e1327] text-white">
                <HeaderBar />
                <div className="space-y-16 max-w-5xl mx-auto py-4 sm:py-4 sm:pb-8">
                    <StatsCards />
                    <div className="grid sm:grid-cols-2 gap-4">
                        <ReferralLinkCard />
                        <EmailInviteCard />
                    </div>
                    <ProgressCard />
                </div>
            </ContainerPages>
        </SidebarPage>
    )
};

export default ReferralDashboardPage;
