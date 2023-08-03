import { SubPromotion } from "./SubComponent/SubPromotionBanner";

const Promotion = () => {
    return ( 
        <div className="promotion-banner mt-5">
            <div className="row">
                <SubPromotion title="Explore Nature"/>
                <SubPromotion title="Explore City"/>
            </div>
        </div>
    );
}
 
export default Promotion;