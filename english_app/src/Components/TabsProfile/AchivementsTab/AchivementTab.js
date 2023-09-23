/** @format */

import ActivityCard from "./ActivityCard/ActivityCard";
import StreaksCard from "./StreaksCard/StreaksCard";
export default function AchivementTab() {
  return (
    <div className="UIContainer">
      <div className="ProfilePage-content">
        <h4 className="t1a4f09p h1pyel1o">Recent activity</h4>
        <ActivityCard />
        <h4 className="t1i82sj8 h1pyel1o">Streaks</h4>
        <StreaksCard />
      </div>
    </div>
  );
}
