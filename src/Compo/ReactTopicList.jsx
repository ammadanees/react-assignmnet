import React from 'react';
import { Link } from 'react-router-dom';

export default function ReactTopicList() {
    const topics = [
        {
            id: 1,
            name: 'Student Management',
            description: 'Manage student records, filter by status, and track academic performance efficiently.',
            path: '/stu',
            icon: '👨‍🎓',
            color: '#4facfe'
        },
        {
            id: 2,
            name: 'Pizza Ordering System',
            description: 'Dynamic order form with size selection, toppings, and real-time price calculation.',
            path: '/pizza',
            icon: '🍕',
            color: '#ff9a9e'
        },
        {
            id: 3,
            name: 'Interactive Counter',
            description: 'Simple yet powerful state management demonstration using a numeric counter.',
            path: '/counter',
            icon: '🔢',
            color: '#667eea'
        },
        {
            id: 4,
            name: 'Get Text Box value',
            description: 'Generate detailed invoices with automated calculations for items and taxes.',
            path: '/txt',
            icon: '📑',
            color: '#f6d365'
        },
        {
            id: 5,
            name: 'Database Form',
            description: 'Robust form handling with validation and database integration simulations.',
            path: '/dbform',
            icon: '🗄️',
            color: '#84fab0'
        },
        {
            id: 6,
            name: 'Academic Marksheet',
            description: 'Calculate grades and percentages based on subject marks with visual feedback.',
            path: '/mark',
            icon: '📊',
            color: '#a18cd1'
        }
    ];

    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold mb-3" style={{ color: '#1a1a2e' }}>React Topics List</h1>
                {/* <p className="lead text-muted">Explore various React concepts through these interactive modules.</p> */}
            </div>

            <div className="row g-4">
                {topics.map((topic) => (
                    <div className="col-md-6 col-lg-4" key={topic.id}>
                        <div
                            className="card h-100 border-0 shadow-sm transition-hover"
                            style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}
                        >
                            <div
                                style={{
                                    height: '8px',
                                    background: topic.color
                                }}
                            />
                            <div className="card-body p-4 d-flex flex-column">
                                <div
                                    className="mb-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: `${topic.color}20`,
                                        borderRadius: '12px',
                                        fontSize: '1.5rem'
                                    }}
                                >
                                    {topic.icon}
                                </div>
                                <h3 className="h5 fw-bold mb-3">{topic.name}</h3>
                                <p className="text-muted mb-4 flex-grow-1">
                                    {topic.description}
                                </p>
                                <Link
                                    to={topic.path}
                                    className="btn btn-outline-primary w-100 border-2 fw-bold"
                                    style={{ borderRadius: '10px' }}
                                >
                                    View
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style>
                {`
          .transition-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
          }
        `}
            </style>
        </div>
    );
}
