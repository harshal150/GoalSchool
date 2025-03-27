import React, { useState } from "react";

const booksData = {
    "Pre-KG (Nursery)": [
      { subject: "All", title: "My First Steps with Cambridge", publisher: "Cambridge" },
    ],
    "LKG": [
      { subject: "Hindi", title: "Varnamaala (Read and Write)", publisher: "Subhas" },
      { subject: "Hindi", title: "My Hindi Alphabet Book", publisher: "Subhas" },
    ],
    "UKG": [
      { subject: "English I", title: "New Mulberry English Course Book", publisher: "Oxford" },
      { subject: "Mathematics", title: "Precise Mathematics (Revised Edition)", publisher: "Selina" },
      { subject: "Hindi", title: "Saral Hindi", publisher: "Madhuban" },
    ],
    "Class I": [
      { subject: "English I", title: "New Mulberry English Course Book", publisher: "Oxford" },
      { subject: "English Grammar", title: "New Learners Grammar and Composition", publisher: "Oxford" },
      { subject: "Cursive", title: "Cursive Writing 1", publisher: "Vidhya Bhavan" },
      { subject: "E.V.S", title: "Cambridge Connection", publisher: "Cambridge" },
      { subject: "Mathematics", title: "Precise Mathematics (Revised Edition)", publisher: "Selina" },
      { subject: "Value Education", title: "Moral Values 1", publisher: "Vardhaman's Canvas" },
      { subject: "Computer", title: "LogiX 1.02", publisher: "Kips" },
      { subject: "Hindi", title: "Saral Hindi", publisher: "Madhuban" },
      { subject: "Drawing", title: "Draw and Colour 1", publisher: "Vidhya Bhavan" },
    ],
    "Class II": [
      { subject: "English I", title: "New Mulberry English Course Book", publisher: "Oxford" },
      { subject: "English Grammar", title: "New Learners Grammar and Composition", publisher: "Oxford" },
      { subject: "Cursive", title: "Cursive Writing 2", publisher: "Vidhya Bhavan" },
      { subject: "E.V.S", title: "Cambridge Connection", publisher: "Cambridge" },
      { subject: "Mathematics", title: "Precise Mathematics (Revised Edition)", publisher: "Selina" },
      { subject: "Value Education", title: "Moral Values 2", publisher: "Vardhaman's Canvas" },
      { subject: "Computer", title: "LogiX 1.02", publisher: "Kips" },
      { subject: "Hindi", title: "Saral Hindi", publisher: "Madhuban" },
      { subject: "Drawing", title: "Draw and Colour 2", publisher: "Vidhya Bhavan" },
    ],
    "Class III": [
      { subject: "English I", title: "New Mulberry English Course Book", publisher: "Oxford" },
      { subject: "English Grammar", title: "New Learners Grammar and Composition", publisher: "Oxford" },
      { subject: "Cursive", title: "Cursive Writing 3", publisher: "Vidhya Bhavan" },
      { subject: "Hindi", title: "Saral Hindi", publisher: "Madhuban" },
      { subject: "Mathematics", title: "Precise Mathematics (Revised Edition)", publisher: "Selina" },
      { subject: "Science", title: "Cambridge Connection", publisher: "Cambridge" },
      { subject: "Social Studies", title: "New Trends", publisher: "Evergreen" },
      { subject: "Value Education", title: "Moral Values 3", publisher: "Vardhaman's Canvas" },
      { subject: "Computer", title: "LogiX 1.02", publisher: "Kips" },
      { subject: "Drawing", title: "Draw and Colour 3", publisher: "Vidhya Bhavan" },
    ],
    "Class IV": [
      { subject: "English I", title: "New Mulberry English Course Book", publisher: "Oxford" },
      { subject: "English Grammar", title: "New Learners Grammar and Composition", publisher: "Oxford" },
      { subject: "Hindi", title: "Saral Hindi", publisher: "Madhuban" },
      { subject: "Mathematics", title: "Precise Mathematics (Revised Edition)", publisher: "Selina" },
      { subject: "Science", title: "Cambridge Connection", publisher: "Cambridge" },
      { subject: "Social Studies", title: "New Trends", publisher: "Evergreen" },
      { subject: "Value Education", title: "Moral Values 4", publisher: "Vardhaman's Canvas" },
      { subject: "Computer", title: "LogiX 1.02", publisher: "Kips" },
      { subject: "Drawing", title: "Draw and Colour 4", publisher: "Vidhya Bhavan" },
    ],
    "Class V": [
      { subject: "English I", title: "New Mulberry English Course Book", publisher: "Oxford" },
      { subject: "English Grammar", title: "New Learners Grammar and Composition", publisher: "Oxford" },
      { subject: "English Literature", title: "Pathways", publisher: "Oxford" },
      { subject: "Hindi", title: "Saral Hindi", publisher: "Madhuban" },
      { subject: "Mathematics", title: "Precise Mathematics (Revised Edition)", publisher: "Selina" },
      { subject: "Science", title: "Cambridge Connection", publisher: "Cambridge" },
      { subject: "Social Studies", title: "New Trends", publisher: "Evergreen" },
      { subject: "Value Education", title: "Moral Values 5", publisher: "Vardhaman's Canvas" },
      { subject: "Computer", title: "LogiX 1.02", publisher: "Kips" },
      { subject: "Drawing", title: "Draw and Colour 5", publisher: "Vidhya Bhavan" },
    ],
    "Class VI": [
      { subject: "English I", title: "New Mulberry English Course Book", publisher: "Oxford" },
      { subject: "English Grammar", title: "New Learners Grammar and Composition", publisher: "Oxford" },
      { subject: "Hindi", title: "Saral Hindi", publisher: "Madhuban" },
      { subject: "Mathematics", title: "Precise Mathematics (Revised Edition)", publisher: "Selina" },
      { subject: "Physics", title: "Concise ICSE Physics", publisher: "Selina" },
      { subject: "Chemistry", title: "Concise ICSE Chemistry", publisher: "Selina" },
      { subject: "Biology", title: "Concise ICSE Biology", publisher: "Selina" },
      { subject: "History & Civics", title: "New Trends", publisher: "Evergreen" },
      { subject: "Geography", title: "New Trends in Discovering World", publisher: "Evergreen" },
      { subject: "Computer", title: "LogiX 1.02", publisher: "Kips" },
      { subject: "Value Education", title: "Moral Values 6", publisher: "Vardhaman's Canvas" },
      { subject: "Drawing", title: "Draw and Colour 6", publisher: "Vidhya Bhavan" },
    ],
    "Class VII": [
      { subject: "English I", title: "New Mulberry English Course Book", publisher: "Oxford" },
      { subject: "English Grammar", title: "New Learners Grammar and Composition", publisher: "Oxford" },
      { subject: "Hindi", title: "Saral Hindi", publisher: "Madhuban" },
      { subject: "Mathematics", title: "Precise Mathematics (Revised Edition)", publisher: "Selina" },
      { subject: "Physics", title: "Concise ICSE Physics", publisher: "Selina" },
      { subject: "Chemistry", title: "Concise ICSE Chemistry", publisher: "Selina" },
      { subject: "Biology", title: "Concise ICSE Biology", publisher: "Selina" },
      { subject: "History & Civics", title: "New Trends", publisher: "Evergreen" },
      { subject: "Geography", title: "New Trends in Discovering World", publisher: "Evergreen" },
      { subject: "Computer", title: "LogiX 1.02", publisher: "Kips" },
      { subject: "Value Education", title: "Moral Values 7", publisher: "Vardhaman's Canvas" },
      { subject: "Drawing", title: "Draw and Colour 7", publisher: "Vidhya Bhavan" },
    ],
    "Class VIII": [
      { subject: "English I", title: "New Mulberry English Course Book", publisher: "Oxford" },
      { subject: "English Grammar", title: "New Learners Grammar and Composition", publisher: "Oxford" },
      { subject: "Hindi", title: "Saral Hindi", publisher: "Madhuban" },
      { subject: "Mathematics", title: "Precise Mathematics (Revised Edition)", publisher: "Selina" },
      { subject: "Physics", title: "Concise ICSE Physics", publisher: "Selina" },
      { subject: "Chemistry", title: "Concise ICSE Chemistry", publisher: "Selina" },
      { subject: "Biology", title: "Concise ICSE Biology", publisher: "Selina" },
      { subject: "History & Civics", title: "New Trends", publisher: "Evergreen" },
      { subject: "Geography", title: "New Trends in Discovering World", publisher: "Evergreen" },
      { subject: "Computer", title: "LogiX 1.02", publisher: "Kips" },
      { subject: "Value Education", title: "Moral Values 8", publisher: "Vardhaman's Canvas" },
      { subject: "Drawing", title: "Draw and Colour 8", publisher: "Vidhya Bhavan" },
    ],
  };
  
  

const BooksList = () => {
  const [selectedClass, setSelectedClass] = useState("Pre-KG (Nursery)");

  return (
    <section className="py-12 bg-violet-100 text-gray-800">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-6">
          Books List 2025-26
        </h1>
        <p className="text-center text-gray-700 mb-8">
          Browse the curated list of books for each grade.
        </p>

        {/* Modern Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.keys(booksData).map((className) => (
            <button
              key={className}
              onClick={() => setSelectedClass(className)}
              className={`px-4 py-2 rounded-full text-md font-medium shadow-md ${
                selectedClass === className
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-100"
              } transition-all duration-300`}
            >
              {className}
            </button>
          ))}
        </div>

        {/* Book List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {booksData[selectedClass].map((book, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-blue-800 mb-2">{book.subject}</h3>
              <p className="text-gray-700 mb-1">
                <strong>Title:</strong> {book.title}
              </p>
              <p className="text-gray-500">
                <strong>Publisher:</strong> {book.publisher}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksList;
