import { ContainerPages } from "../../../shared/ContainerPages";
import ButtonBack from "../../../shared/UI/ButtonBack";
import FiltersCard from "./components/FiltersCard";
import HeaderSection from "./components/HeaderSection";
import ProgressBarCard from "./components/ProgessBarCard";
import ReferralHistoryTable from "./components/ReferralHistorTable";
import SummaryStats from "./components/SummaryStats";

const ProgressPage = () => {
    return (
        <ContainerPages className="bg-[#101223] text-white px-4 py-8 space-y-6">
            <ButtonBack route="/referring" />
            <div className="space-y-8 max-w-5xl mx-auto">
                <HeaderSection />
                <FiltersCard />
                <SummaryStats />
                <ProgressBarCard />
                <ReferralHistoryTable />
            </div>
        </ContainerPages>
    );
};

export default ProgressPage;
