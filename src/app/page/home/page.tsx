import { SidebarPage } from "../../shared/ResponsiveSidebar"
import { ContainerPages } from "../../shared/ContainerPages"
import Header from "./components/Header"
import Nav from "./components/Nav"
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer"

const PageHome = () => {
    return (
        <SidebarPage>
            <ContainerPages className="bg-gradient-to-tr from-[#2d13a1] to-[#291191] text-white">
                <div className="space-y-16 max-w-5xl mx-auto pt-4 sm:pt-4">
                    <Nav />
                    <Header />
                    <HowItWorks />
                </div>
                <Footer />
            </ContainerPages>
        </SidebarPage>
    )
}











export default PageHome