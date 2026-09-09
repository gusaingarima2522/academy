import React from 'react'

const ChooseUs = () => {
    const whyChooseUs = [
  {
    id: 1,
    title: "Experienced Faculty",
    description:
      "Learn from experienced and dedicated teachers who focus on your overall academic growth.",
    icon: "👨‍🏫",
  },
  {
    id: 2,
    title: "Quality Education",
    description:
      "Get structured and quality learning with updated study material and practical guidance.",
    icon: "📚",
  },
  {
    id: 3,
    title: "Personalized Attention",
    description:
      "Small batches and individual attention help students understand concepts better.",
    icon: "🎯",
  },
  {
    id: 4,
    title: "Regular Tests & Assessments",
    description:
      "Regular tests and performance analysis help you track your preparation and improve.",
    icon: "📝",
  },
  {
    id: 5,
    title: "Exam-Focused Preparation",
    description:
      "Our courses are designed to prepare students effectively for CLAT, CUET and other competitive exams.",
    icon: "🏆",
  },
  {
    id: 6,
    title: "Complete Student Support",
    description:
      "Get continuous guidance and support throughout your preparation journey.",
    icon: "🤝",
  },
];
  return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  m-10">
  {whyChooseUs.map((item) => (
    <div
      key={item.id}
      className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition"
    >
      <div className="text-4xl mb-4">{item.icon}</div>

      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {item.title}
      </h3>

      <p className="text-gray-600">
        {item.description}
      </p>
    </div>
  ))}
</div>  )
}

export default ChooseUs
