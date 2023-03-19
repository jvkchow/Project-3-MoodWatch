const tips = [
  'Practice good self-care by getting enough sleep, eating nutritious foods, and exercising regularly.',
  'Set achievable goals and celebrate small successes along the way.',
  'Take breaks and engage in activities that you enjoy to prevent burnout.',
  'Surround yourself with positive people who support and encourage you.',
  'Practice mindfulness techniques such as meditation, deep breathing, or yoga to reduce stress and increase focus.',
  "Keep a gratitude journal and write down three things you're thankful for each day.",
  'Listen to uplifting music or podcasts that inspire and motivate you.',
  'Connect with nature by spending time outside or bringing plants into your living space.',
  'Practice good time management by breaking down tasks into smaller, manageable steps.',
  "Seek professional help if you're struggling with your mental health. Remember, it's okay to ask for help!",
];

export const DailyTip = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 222, 142, 0.5)',
        padding: '15px',
        margin: '10px',
        borderRadius: '5px',
      }}
    >
      <p
        style={{
          fontSize: '16px',
          margin: 0,
          marginBottom: 10,
          fontWeight: 'bold',
        }}
      >
        Tip of the Day
      </p>
      <p
        style={{
          fontSize: '16px',
          margin: 0,
        }}
      >
        {tips[Math.floor(Math.random() * tips.length)]}
      </p>
    </div>
  );
};
