import { ContainerPages } from "../../../shared/ContainerPages"
import ButtonBack from "../../../shared/UI/ButtonBack"
import HeaderRewards from "./components/HeaderRewards"
import RewardsHistoryList from "./components/RewardsHistoryList"
import StatsRewards from "./components/StatsReward"

const RewardsPage = () => {
    return (
        <ContainerPages className="bg-[#101223] text-white space-y-6">
            <ButtonBack route="/referring" />

            <div className="space-y-8 max-w-5xl mx-auto pt-4 sm:pt-4">
                <HeaderRewards />
                <StatsRewards />
                <RewardsHistoryList />
            </div>
        </ContainerPages>
    )
}

export default RewardsPage
