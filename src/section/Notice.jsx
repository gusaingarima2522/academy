import { Link } from "react-router-dom";
import { notificationList } from "../data/notifications";

const Notice = () => {
  const tickerItems = [
    ...notificationList.map((item) => ({
      key: item.slug,
      to: `/notifications/${item.slug}`,
      label: item.tickerText,
    })),
    { key: "contact", to: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="notification w-full overflow-hidden">

      <div className="topic shrink-0">
        <h1>Notification!</h1>
      </div>

      <div className="crouse-notification" role="region" aria-label="Latest notifications">
        <div className="notification-track">
          {[false, true].map((isCopy) => (
            <div
              key={isCopy ? "copy" : "original"}
              className="notification-group"
              aria-hidden={isCopy || undefined}
            >
              {tickerItems.map((item) => (
                <span key={item.key} className="notification-item">
                  <Link to={item.to} tabIndex={isCopy ? -1 : undefined}>{item.label}</Link>
                  <span className="notification-separator" aria-hidden="true">|</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Notice;
