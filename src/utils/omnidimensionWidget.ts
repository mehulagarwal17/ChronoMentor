
export const initializeOmnidimensionWidget = (userData: {
  user_id: string;
  user_name: string;
  palm_heart_line_trait: string;
  user_regret: string;
  user_passion: string;
  timeline_title: string;
}) => {
  // Set up global settings before loading the script
  (window as any).omnidimensionSettings = {
    user_id: userData.user_id,
    user_name: userData.user_name,
    palm_heart_line_trait: userData.palm_heart_line_trait,
    user_regret: userData.user_regret,
    user_passion: userData.user_passion,
    timeline_title: userData.timeline_title
  };

  // Remove existing script if it exists to avoid duplicates
  const existingScript = document.getElementById('omnidimension-web-widget');
  if (existingScript) {
    existingScript.remove();
  }

  // Create and append the widget script
  const script = document.createElement('script');
  script.id = 'omnidimension-web-widget';
  script.async = true;
  script.src = 'https://backend.omnidim.io/web_widget.js?secret_key=39637dd016b2b44c3e09067387fc6445';
  
  // Append to document head
  document.head.appendChild(script);

  console.log('OmniDimension widget initialized with settings:', (window as any).omnidimensionSettings);
};
