
export const initializeOmnidimensionWidget = (userData: {
  user_id: string;
  user_name: string;
  palm_heart_line_trait: string;
  user_regret: string;
  user_passion: string;
  timeline_title: string;
}) => {
  // Set up global settings
  (window as any).omnidimensionSettings = userData;

  // Remove existing script if it exists
  const existingScript = document.getElementById('omnidimension-web-widget');
  if (existingScript) {
    existingScript.remove();
  }

  // Create and append the widget script
  const script = document.createElement('script');
  script.id = 'omnidimension-web-widget';
  script.async = true;
  script.src = 'https://backend.omnidim.io/web_widget.js?secret_key=39637dd016b2b44c3e09067387fc6445';
  document.head.appendChild(script);
};
