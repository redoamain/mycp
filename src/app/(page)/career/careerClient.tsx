// src/app/karir/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  IconSearch,
  IconBriefcase,
  IconLocation,
  IconClock,
} from "@tabler/icons-react";

interface Job {
  id: string;
  title: string;
  image: string; // Tambahkan field image
  department: string;
  type: string;
  status: "open" | "closed";
  postedDate: string;
  icon: string;
  description: string;
  requirements: string[];
  skills: string[];
  guidelines: string[];
  location?: string;
  salary?: string;
  experience?: string;
  education?: string;
}

export default function CareerClient() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "open" | "closed">(
    "all",
  );
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/career");
      const data = await response.json();
      setJobs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error:", error);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    const matchesStatus = filterStatus === "all" || job.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const openJobs = jobs.filter((j) => j.status === "open").length;
  const closedJobs = jobs.filter((j) => j.status === "closed").length;

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "-";
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900 pt-20">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          <p className="text-neutral-500">Loading job vacancies...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 pt-20 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4">
            Careers at{" "}
            <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              CITI PLUMB
            </span>
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Join our team and build your career with a leading faucet & faucet
            manufacturing company
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 text-center shadow-sm border border-neutral-200 dark:border-neutral-700">
            <div className="text-2xl font-bold text-blue-600">
              {jobs.length}
            </div>
            <div className="text-sm text-neutral-500">Total Positions</div>
          </div>
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 text-center shadow-sm border border-neutral-200 dark:border-neutral-700">
            <div className="text-2xl font-bold text-green-600">{openJobs}</div>
            <div className="text-sm text-neutral-500">Open</div>
          </div>
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 text-center shadow-sm border border-neutral-200 dark:border-neutral-700">
            <div className="text-2xl font-bold text-red-600">{closedJobs}</div>
            <div className="text-sm text-neutral-500">Closed</div>
          </div>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="flex-1 relative">
            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search position, department, or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            {[
              { value: "all", label: "All" },
              { value: "open", label: "Open" },
              { value: "closed", label: "Closed" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setFilterStatus(option.value as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  filterStatus === option.value
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-600"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Job List */}
        <AnimatePresence mode="wait">
          {filteredJobs.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-16 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700"
            >
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-neutral-500">No job vacancies found</p>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  {/* Header with Image */}
                  <div
                    className="p-5 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition"
                    onClick={() => toggleExpand(job.id)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      {/* Left: Image & Content */}
                      <div className="flex items-start gap-4 flex-1">
                        {/* Image - New */}
                        {job.image && (
                          <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-700">
                            <img
                              src={job.image}
                              alt={job.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  "/placeholder-job.png";
                              }}
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2">
                            <div className="text-2xl">{job.icon || "💼"}</div>
                            <div>
                              <h3 className="text-lg font-semibold text-black dark:text-white">
                                {job.title}
                              </h3>
                              <div className="flex flex-wrap items-center gap-2 mt-1">
                                <span className="text-sm text-neutral-500 bg-neutral-100 dark:bg-neutral-700 px-2 py-0.5 rounded">
                                  {job.department}
                                </span>
                                <span className="text-sm text-neutral-500">
                                  {job.type}
                                </span>
                                {job.location && (
                                  <span className="text-sm text-neutral-500 flex items-center gap-1">
                                    <IconLocation className="w-3 h-3" />
                                    {job.location}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right: Status & Date */}
                      <div className="flex items-center gap-3 shrink-0">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            job.status === "open"
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          }`}
                        >
                          {job.status === "open" ? "✅ Open" : "🔒 Closed"}
                        </span>
                        <span className="text-xs text-neutral-400">
                          📅 {formatDate(job.postedDate)}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-3 line-clamp-2">
                      {job.description.replace(/<[^>]*>/g, "")}
                    </p>

                    {/* Skills preview */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {job.skills.slice(0, 4).map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 4 && (
                        <span className="text-xs text-neutral-400">
                          +{job.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Expanded Detail */}
                  <AnimatePresence>
                    {expandedJob === job.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-neutral-200 dark:border-neutral-700"
                      >
                        <div className="p-5 space-y-4">
                          {/* Full Image in Expanded View */}
                          {job.image && (
                            <div className="rounded-lg overflow-hidden">
                              <img
                                src={job.image}
                                alt={job.title}
                                className="w-full h-auto object-contain"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src =
                                    "/placeholder-job.png";
                                }}
                              />
                            </div>
                          )}

                          {/* Requirements */}
                          {job.requirements.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-sm text-black dark:text-white mb-2">
                                📋 Requirements
                              </h4>
                              <ul className="list-disc list-inside space-y-1">
                                {job.requirements.map((req, i) => (
                                  <li
                                    key={i}
                                    className="text-sm text-neutral-600 dark:text-neutral-400"
                                  >
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* All Skills */}
                          {job.skills.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-sm text-black dark:text-white mb-2">
                                🛠️ Skills
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {job.skills.map((skill, i) => (
                                  <span
                                    key={i}
                                    className="text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Guidelines */}
                          {job.guidelines.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-sm text-black dark:text-white mb-2">
                                📖 Exam Guidelines & Materials
                              </h4>
                              <ul className="list-disc list-inside space-y-1">
                                {job.guidelines.map((item, i) => (
                                  <li
                                    key={i}
                                    className="text-sm text-neutral-600 dark:text-neutral-400"
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Additional Info */}
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                            {job.salary && (
                              <div>
                                <p className="text-xs text-neutral-400">
                                  💰 Salary
                                </p>
                                <p className="text-sm font-medium text-black dark:text-white">
                                  {job.salary}
                                </p>
                              </div>
                            )}
                            {job.experience && (
                              <div>
                                <p className="text-xs text-neutral-400">
                                  📊 Experience
                                </p>
                                <p className="text-sm font-medium text-black dark:text-white">
                                  {job.experience}
                                </p>
                              </div>
                            )}
                            {job.education && (
                              <div>
                                <p className="text-xs text-neutral-400">
                                  🎓 Education
                                </p>
                                <p className="text-sm font-medium text-black dark:text-white">
                                  {job.education}
                                </p>
                              </div>
                            )}
                            {job.location && (
                              <div>
                                <p className="text-xs text-neutral-400">
                                  📍 Location
                                </p>
                                <p className="text-sm font-medium text-black dark:text-white">
                                  {job.location}
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Apply Button */}
                          {job.status === "open" && (
                            <div className="pt-2">
                              <a
                                href={`mailto:citiplumb.hrd@gmail.com?subject=Job Application - ${job.title}&body=Dear Citiplumb HR Team,%0A%0AI would like to apply for the position of ${job.title} in the ${job.department} department.%0A%0APlease find attached my CV, portfolio, and supporting documents.%0A%0APersonal Information:%0AName: [Full Name]%0AEmail: [Active Email]%0APhone: [Contact Number]%0A%0AI look forward to hearing from you.%0A%0ASincerely,%0A[Full Name]%0A%0A---%0ASent via Citiplumb Careers Page`}
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                              >
                                📨 Apply Now
                              </a>
                              <p className="text-xs text-neutral-400 mt-2">
                                Send your application to{" "}
                                <a
                                  href="mailto:citiplumb.hrd@gmail.com"
                                  className="text-blue-600 hover:underline"
                                >
                                  citiplumb.hrd@gmail.com
                                </a>
                              </p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Toggle Button */}
                  <div className="px-5 py-2 border-t border-neutral-100 dark:border-neutral-700">
                    <button
                      onClick={() => toggleExpand(job.id)}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {expandedJob === job.id
                        ? "▲ Hide Details"
                        : "▼ View Details"}
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Email Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center border border-blue-200 dark:border-blue-800"
        >
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            ✉️ Send your application to{" "}
            <a
              href="mailto:citiplumb.hrd@gmail.com"
              className="font-semibold text-blue-600 hover:underline"
            >
              citiplumb.hrd@gmail.com
            </a>{" "}
            with subject:{" "}
            <span className="font-mono text-xs bg-white dark:bg-neutral-800 px-2 py-1 rounded border border-blue-200 dark:border-blue-800">
              Application - [Position]
            </span>
          </p>
          <p className="text-xs text-neutral-500 mt-2">
            Please include your CV, portfolio (if applicable), and other
            supporting documents.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
