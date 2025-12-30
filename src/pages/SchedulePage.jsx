import React, { useState } from "react";
import Navbar from "../components/HomeComps/Navbar";
import Footer from "../components/HomeComps/Footer";
import "../styles/SchedulePage.css"; // Importing CSS file

const SchedulePage = () => {
  const [selectedYear, setSelectedYear] = useState("2025-2026");
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedDay, setSelectedDay] = useState("Dec 22");

  const years = ["2023-2024", "2024-2025", "2025-2026"];

  const weeksByYear = {
    "2024-2025": [
      { number: 1, days: ["Dec 23", "Dec 26", "Dec 28"] },
      { number: 2, days: ["Dec 29", "Dec 30"] },
      { number: "Playoffs", days: ["Jan 2"] },
    ],

    // NEW SEASON
    "2025-2026": [
      { number: 1, days: ["Dec 22", "Dec 23", "Dec 25"] },
      { number: 2, days: ["Dec 29"] },
      { number: "Playoffs", days: ["Dec 30", "Jan 1"] }, // placeholders
    ],
  };

  // fallback so nothing breaks if "2023-2024" exists but has no data yet
  const weeks = weeksByYear[selectedYear] || weeksByYear["2024-2025"];

  const placeholderMatches = [
    //DECEMBER 23
    {
      id: "2024-2025-1-Dec 23-1",
      year: "2024-2025",
      week: 1,
      day: "Dec 23",
      homeTeam: "VALVERDE FC",
      awayTeam: "BOMBS FC",
      homeScore: "7",
      awayScore: "3",
      date: "Dec 23",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-1-Dec 23-2",
      year: "2024-2025",
      week: 1,
      day: "Dec 23",
      homeTeam: "DEMBELE FC",
      awayTeam: "PEDRI FC",
      homeScore: "1",
      awayScore: "1",
      date: "Dec 23",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-1-Dec 23-3",
      year: "2024-2025",
      week: 1,
      day: "Dec 23",
      homeTeam: "DABEAST FC",
      awayTeam: "PEDRI FC",
      homeScore: "1",
      awayScore: "3",
      date: "Dec 23",
      time: "7:50 PM",
    },
    {
      id: "2024-2025-1-Dec 23-4",
      year: "2024-2025",
      week: 1,
      day: "Dec 23",
      homeTeam: "BOMBS FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "0",
      awayScore: "8",
      date: "Dec 23",
      time: "7:50 PM",
    },
    {
      id: "2024-2025-1-Dec 23-5",
      year: "2024-2025",
      week: 1,
      day: "Dec 23",
      homeTeam: "DABEAST FC",
      awayTeam: "DEMBELE FC",
      homeScore: "1",
      awayScore: "2",
      date: "Dec 23",
      time: "8:25 PM",
    },
    {
      id: "2024-2025-1-Dec 23-6",
      year: "2024-2025",
      week: 1,
      day: "Dec 23",
      homeTeam: "COLE WORLD FC",
      awayTeam: "VALVERDE FC",
      homeScore: "4",
      awayScore: "2",
      date: "Dec 23",
      time: "8:25 PM",
    },
    //DECEMBER 26
    {
      id: "2024-2025-1-Dec 26-1",
      year: "2024-2025",
      week: 1,
      day: "Dec 26",
      homeTeam: "VALVERDE FC",
      awayTeam: "PEDRI FC",
      homeScore: "0",
      awayScore: "3",
      date: "Dec 26",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-1-Dec 26-2",
      year: "2024-2025",
      week: 1,
      day: "Dec 26",
      homeTeam: "DEMBELE FC",
      awayTeam: "BOMBS FC",
      homeScore: "0",
      awayScore: "1",
      date: "Dec 26",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-1-Dec 26-3",
      year: "2024-2025",
      week: 1,
      day: "Dec 26",
      homeTeam: "DABEAST FC",
      awayTeam: "BOMBS FC",
      homeScore: "2",
      awayScore: "0",
      date: "Dec 26",
      time: "7:50 PM",
    },
    {
      id: "2024-2025-1-Dec 26-4",
      year: "2024-2025",
      week: 1,
      day: "Dec 26",
      homeTeam: "DEMBELE FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "3",
      awayScore: "1",
      date: "Dec 26",
      time: "7:50 PM",
    },
    {
      id: "2024-2025-1-Dec 26-5",
      year: "2024-2025",
      week: 1,
      day: "Dec 26",
      homeTeam: "PEDRI FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "0",
      awayScore: "1",
      date: "Dec 26",
      time: "8:25 PM",
    },
    {
      id: "2024-2025-1-Dec 26-6",
      year: "2024-2025",
      week: 1,
      day: "Dec 26",
      homeTeam: "VALVERDE FC",
      awayTeam: "DABEAST FC",
      homeScore: "6",
      awayScore: "2",
      date: "Dec 26",
      time: "8:25 PM",
    },
    //DECEMBER 28
    {
      id: "2024-2025-1-Dec 28-1",
      year: "2024-2025",
      week: 1,
      day: "Dec 28",
      homeTeam: "BOMBS FC",
      awayTeam: "PEDRI FC",
      homeScore: "1",
      awayScore: "5",
      date: "Dec 28",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-1-Dec 28-2",
      year: "2024-2025",
      week: 1,
      day: "Dec 28",
      homeTeam: "DABEAST FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "1",
      awayScore: "2",
      date: "Dec 28",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-1-Dec 28-3",
      year: "2024-2025",
      week: 1,
      day: "Dec 28",
      homeTeam: "DEMBELE FC",
      awayTeam: "PEDRI FC",
      homeScore: "1",
      awayScore: "0",
      date: "Dec 28",
      time: "7:50 PM",
    },
    {
      id: "2024-2025-1-Dec 28-4",
      year: "2024-2025",
      week: 1,
      day: "Dec 28",
      homeTeam: "COLE WORLD FC",
      awayTeam: "VALVERDE FC",
      homeScore: "2",
      awayScore: "0",
      date: "Dec 28",
      time: "7:50 PM",
    },
    {
      id: "2024-2025-1-Dec 28-5",
      year: "2024-2025",
      week: 1,
      day: "Dec 28",
      homeTeam: "DEMBELE FC",
      awayTeam: "VALVERDE FC",
      homeScore: "2",
      awayScore: "1",
      date: "Dec 28",
      time: "8:25 PM",
    },
    {
      id: "2024-2025-1-Dec 28-6",
      year: "2024-2025",
      week: 1,
      day: "Dec 28",
      homeTeam: "DABEAST FC",
      awayTeam: "BOMBS FC",
      homeScore: "3",
      awayScore: "1",
      date: "Dec 28",
      time: "8:25 PM",

      //DECEMBER 29
    },
    {
      id: "2024-2025-2-Dec 29-1",
      year: "2024-2025",
      week: 2,
      day: "Dec 29",
      homeTeam: "DABEAST FC",
      awayTeam: "DEMBELE FC",
      homeScore: "3",
      awayScore: "2",
      date: "Dec 29",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-2-Dec 29-2",
      year: "2024-2025",
      week: 2,
      day: "Dec 29",
      homeTeam: "BOMBS FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "1",
      awayScore: "4",
      date: "Dec 29",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-2-Dec 29-3",
      year: "2024-2025",
      week: 2,
      day: "Dec 29",
      homeTeam: "DEMBELE FC",
      awayTeam: "BOMBS FC",
      homeScore: "3",
      awayScore: "2",
      date: "Dec 29",
      time: "7:45 PM",
    },
    {
      id: "2024-2025-2-Dec 29-4",
      year: "2024-2025",
      week: 2,
      day: "Dec 29",
      homeTeam: "PEDRI FC",
      awayTeam: "VALVERDE FC",
      homeScore: "1",
      awayScore: "3",
      date: "Dec 29",
      time: "7:45 PM",
    },
    {
      id: "2024-2025-2-Dec 29-5",
      year: "2024-2025",
      week: 2,
      day: "Dec 29",
      homeTeam: "DABEAST FC",
      awayTeam: "VALVERDE FC",
      homeScore: "2",
      awayScore: "2",
      date: "Dec 29",
      time: "8:20 PM",
    },
    {
      id: "2024-2025-2-Dec 29-6",
      year: "2024-2025",
      week: 2,
      day: "Dec 29",
      homeTeam: "COLE WORLD FC",
      awayTeam: "PEDRI FC",
      homeScore: "0",
      awayScore: "1",
      date: "Dec 29",
      time: "8:20 PM",
    },

    //DECEMBER 30

    {
      id: "2024-2025-2-Dec 30-1",
      year: "2024-2025",
      week: 2,
      day: "Dec 30",
      homeTeam: "VALVERDE FC",
      awayTeam: "DEMBELE FC",
      homeScore: "3",
      awayScore: "0",
      date: "Dec 30",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-2-Dec 30-2",
      year: "2024-2025",
      week: 2,
      day: "Dec 30",
      homeTeam: "BOMBS FC",
      awayTeam: "PEDRI FC",
      homeScore: "2",
      awayScore: "2",
      date: "Dec 30",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-2-Dec 30-3",
      year: "2024-2025",
      week: 2,
      day: "Dec 30",
      homeTeam: "DABEAST FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "0",
      awayScore: "2",
      date: "Dec 30",
      time: "7:45 PM",
    },
    {
      id: "2024-2025-2-Dec 30-4",
      year: "2024-2025",
      week: 2,
      day: "Dec 30",
      homeTeam: "BOMBS FC",
      awayTeam: "VALVERDE FC",
      homeScore: "2",
      awayScore: "7",
      date: "Dec 30",
      time: "7:45 PM",
    },
    {
      id: "2024-2025-2-Dec 30-5",
      year: "2024-2025",
      week: 2,
      day: "Dec 30",
      homeTeam: "DABEAST FC",
      awayTeam: "PEDRI FC",
      homeScore: "3",
      awayScore: "2",
      date: "Dec 30",
      time: "8:20 PM",
    },
    {
      id: "2024-2025-2-Dec 30-6",
      year: "2024-2025",
      week: 2,
      day: "Dec 30",
      homeTeam: "DEMBELE FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "4",
      awayScore: "2",
      date: "Dec 30",
      time: "8:20 PM",
    },

    //PLAYOFFS

    {
      id: "2024-2025-2-Jan 2-1",
      year: "2024-2025",
      week: 2,
      day: "Jan 2",
      homeTeam: "VALVERDE FC",
      awayTeam: "BOMBS FC",
      homeScore: "-",
      awayScore: "-",
      date: "Jan 2",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-2-Jan 2-2",
      year: "2024-2025",
      week: 2,
      day: "Jan 2",
      homeTeam: "PEDRI FC",
      awayTeam: "DABEAST FC",
      homeScore: "-",
      awayScore: "-",
      date: "Jan 2",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-2-Jan 2-3",
      year: "2024-2025",
      week: 2,
      day: "Jan 2",
      homeTeam: "DEMBELE FC",
      awayTeam: "WINNER OF PLAY IN (HIGHER SEED)",
      homeScore: "-",
      awayScore: "-",
      date: "Jan 2",
      time: "8:00 PM",
    },
    {
      id: "2024-2025-2-Jan 2-4",
      year: "2024-2025",
      week: 2,
      day: "Jan 2",
      homeTeam: "COLE WORLD FC",
      awayTeam: "WINNER OF PLAY IN (LOWER SEED)",
      homeScore: "-",
      awayScore: "-",
      date: "Jan 2",
      time: "8:00 PM",
    },
    {
      id: "2024-2025-2-Jan 2-5",
      year: "2024-2025",
      week: 2,
      day: "Jan 2",
      homeTeam: "-",
      awayTeam: "-",
      homeScore: "-",
      awayScore: "-",
      date: "Jan 2",
      time: "8:55 PM",
    },

    // =====================
    // 2025-2026 (NEW SEASON)
    // =====================

    // DECEMBER 22 (Day 1) — 6 games
    {
      id: "2025-2026-1-Dec 22-1",
      year: "2025-2026",
      week: 1,
      day: "Dec 22",
      homeTeam: "VALVERDE FC",
      awayTeam: "MANSAF FC",
      homeScore: "0",
      awayScore: "1",
      date: "Dec 22",
      time: "9:00 PM",
    },
    {
      id: "2025-2026-1-Dec 22-2",
      year: "2025-2026",
      week: 1,
      day: "Dec 22",
      homeTeam: "DEMBELE FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "4",
      awayScore: "1",
      date: "Dec 22",
      time: "9:30 PM",
    },
    {
      id: "2025-2026-1-Dec 22-3",
      year: "2025-2026",
      week: 1,
      day: "Dec 22",
      homeTeam: "DABEAST FC",
      awayTeam: "PEDRI FC",
      homeScore: "2",
      awayScore: "1",
      date: "Dec 22",
      time: "10:00 PM",
    },
    {
      id: "2025-2026-1-Dec 22-4",
      year: "2025-2026",
      week: 1,
      day: "Dec 22",
      homeTeam: "COLE WORLD FC",
      awayTeam: "VALVERDE FC",
      homeScore: "4",
      awayScore: "2",
      date: "Dec 22",
      time: "10:30 PM",
    },
    {
      id: "2025-2026-1-Dec 22-5",
      year: "2025-2026",
      week: 1,
      day: "Dec 22",
      homeTeam: "PEDRI FC",
      awayTeam: "MANSAF FC",
      homeScore: "0",
      awayScore: "0",
      date: "Dec 22",
      time: "11:00 PM",
    },
    {
      id: "2025-2026-1-Dec 22-6",
      year: "2025-2026",
      week: 1,
      day: "Dec 22",
      homeTeam: "DEMBELE FC",
      awayTeam: "DABEAST FC",
      homeScore: "0",
      awayScore: "1",
      date: "Dec 22",
      time: "11:30 PM",
    },

    // DECEMBER 23 (Day 2) — 6 games
    {
      id: "2025-2026-1-Dec 23-1",
      year: "2025-2026",
      week: 1,
      day: "Dec 23",
      homeTeam: "MANSAF FC",
      awayTeam: "PEDRI FC",
      homeScore: "0",
      awayScore: "2",
      date: "Dec 23",
      time: "9:00 PM",
    },
    {
      id: "2025-2026-1-Dec 23-2",
      year: "2025-2026",
      week: 1,
      day: "Dec 23",
      homeTeam: "VALVERDE FC",
      awayTeam: "DABEAST FC",
      homeScore: "2",
      awayScore: "4",
      date: "Dec 23",
      time: "9:30 PM",
    },
    {
      id: "2025-2026-1-Dec 23-3",
      year: "2025-2026",
      week: 1,
      day: "Dec 23",
      homeTeam: "COLE WORLD FC",
      awayTeam: "DEMBELE FC",
      homeScore: "0",
      awayScore: "1",
      date: "Dec 23",
      time: "10:00 PM",
    },
    {
      id: "2025-2026-1-Dec 23-4",
      year: "2025-2026",
      week: 1,
      day: "Dec 23",
      homeTeam: "MANSAF FC",
      awayTeam: "VALVERDE FC",
      homeScore: "6",
      awayScore: "0",
      date: "Dec 23",
      time: "10:30 PM",
    },
    {
      id: "2025-2026-1-Dec 23-5",
      year: "2025-2026",
      week: 1,
      day: "Dec 23",
      homeTeam: "DABEAST FC",
      awayTeam: "DEMBELE FC",
      homeScore: "2",
      awayScore: "2",
      date: "Dec 23",
      time: "11:00 PM",
    },
    {
      id: "2025-2026-1-Dec 23-6",
      year: "2025-2026",
      week: 1,
      day: "Dec 23",
      homeTeam: "COLE WORLD FC",
      awayTeam: "PEDRI FC",
      homeScore: "1",
      awayScore: "1",
      date: "Dec 23",
      time: "11:30 PM",
    },

    // DECEMBER 25 (Day 3) — 6 games
    {
      id: "2025-2026-1-Dec 25-1",
      year: "2025-2026",
      week: 1,
      day: "Dec 25",
      homeTeam: "PEDRI FC",
      awayTeam: "VALVERDE FC",
      homeScore: "4",
      awayScore: "0",
      date: "Dec 25",
      time: "9:00 PM",
    },
    {
      id: "2025-2026-1-Dec 25-2",
      year: "2025-2026",
      week: 1,
      day: "Dec 25",
      homeTeam: "COLE WORLD FC",
      awayTeam: "DABEAST FC",
      homeScore: "0",
      awayScore: "2",
      date: "Dec 25",
      time: "9:30 PM",
    },
    {
      id: "2025-2026-1-Dec 25-3",
      year: "2025-2026",
      week: 1,
      day: "Dec 25",
      homeTeam: "VALVERDE FC",
      awayTeam: "DEMBELE FC",
      homeScore: "2",
      awayScore: "5",
      date: "Dec 25",
      time: "10:00 PM",
    },
    {
      id: "2025-2026-1-Dec 25-4",
      year: "2025-2026",
      week: 1,
      day: "Dec 25",
      homeTeam: "MANSAF FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "2",
      awayScore: "0",
      date: "Dec 25",
      time: "10:30 PM",
    },
    {
      id: "2025-2026-1-Dec 25-5",
      year: "2025-2026",
      week: 1,
      day: "Dec 25",
      homeTeam: "PEDRI FC",
      awayTeam: "DEMBELE FC",
      homeScore: "0",
      awayScore: "4",
      date: "Dec 25",
      time: "11:00 PM",
    },
    {
      id: "2025-2026-1-Dec 25-6",
      year: "2025-2026",
      week: 1,
      day: "Dec 25",
      homeTeam: "DABEAST FC",
      awayTeam: "MANSAF FC",
      homeScore: "1",
      awayScore: "1",
      date: "Dec 25",
      time: "11:30 PM",
    },

    // DECEMBER 29 (Day 4) — 3 games + QFs (first leg)
    {
      id: "2025-2026-2-Dec 29-1",
      year: "2025-2026",
      week: 2,
      day: "Dec 29",
      homeTeam: "VALVERDE FC",
      awayTeam: "PEDRI FC",
      homeScore: "2",
      awayScore: "2",
      date: "Dec 29",
      time: "9:00 PM",
    },
    {
      id: "2025-2026-2-Dec 29-2",
      year: "2025-2026",
      week: 2,
      day: "Dec 29",
      homeTeam: "DABEAST FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "3",
      awayScore: "0",
      date: "Dec 29",
      time: "9:30 PM",
    },
    {
      id: "2025-2026-2-Dec 29-3",
      year: "2025-2026",
      week: 2,
      day: "Dec 29",
      homeTeam: "DEMBELE FC",
      awayTeam: "MANSAF FC",
      homeScore: "2",
      awayScore: "1",
      date: "Dec 29",
      time: "10:00 PM",
    },
    {
      id: "2025-2026-2-Dec 29-break-1",
      year: "2025-2026",
      week: 2,
      day: "Dec 29",
      homeTeam: "(Break)",
      awayTeam: "-",
      homeScore: "-",
      awayScore: "-",
      date: "Dec 29",
      time: "10:30 PM",
    },
    {
      id: "2025-2026-2-Dec 29-qf-1",
      year: "2025-2026",
      week: 2,
      day: "Dec 29",
      homeTeam: "PEDRI FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "2",
      awayScore: "2",
      date: "Dec 29",
      time: "11:00 PM",
    },
    {
      id: "2025-2026-2-Dec 29-qf-2",
      year: "2025-2026",
      week: 2,
      day: "Dec 29",
      homeTeam: "VALVERDE FC",
      awayTeam: "DEMBELE FC",
      homeScore: "2",
      awayScore: "2",
      date: "Dec 29",
      time: "11:30 PM",
    },

    // DECEMBER 30 (Day 5) — QFs (second leg) + Semis (first leg)
    {
      id: "2025-2026-Playoffs-Dec 30-1",
      year: "2025-2026",
      week: "Playoffs",
      day: "Dec 30",
      homeTeam: "VALVERDE FC",
      awayTeam: "DEMBELE FC",
      homeScore: "-",
      awayScore: "-",
      date: "Dec 30",
      time: "9:00 PM",
    },
    {
      id: "2025-2026-Playoffs-Dec 30-2",
      year: "2025-2026",
      week: "Playoffs",
      day: "Dec 30",
      homeTeam: "PEDRI FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "-",
      awayScore: "-",
      date: "Dec 30",
      time: "9:30 PM",
    },
    {
      id: "2025-2026-Playoffs-Dec 30-break-1",
      year: "2025-2026",
      week: "Playoffs",
      day: "Dec 30",
      homeTeam: "MANSAF FC",
      awayTeam: "WINNER OF 3A VS 2B",
      homeScore: "-",
      awayScore: "-",
      date: "Dec 30",
      time: "10:00 PM",
    },
    {
      id: "2025-2026-Playoffs-Dec 30-3",
      year: "2025-2026",
      week: "Playoffs",
      day: "Dec 30",
      homeTeam: "DABEAST FC",
      awayTeam: "WINNER OF 2A VS 3B",
      homeScore: "-",
      awayScore: "-",
      date: "Dec 30",
      time: "10:30 PM",
    },
    // {
    //   id: "2025-2026-Playoffs-Dec 30-4",
    //   year: "2025-2026",
    //   week: "Playoffs",
    //   day: "Dec 30",
    //   homeTeam: "SEMI FINAL B (FIRST LEG)",
    //   awayTeam: "TBD",
    //   homeScore: "-",
    //   awayScore: "-",
    //   date: "Dec 30",
    //   time: "11:00 PM",
    // },
    // {
    //   id: "2025-2026-Playoffs-Dec 30-break-2",
    //   year: "2025-2026",
    //   week: "Playoffs",
    //   day: "Dec 30",
    //   homeTeam: "(Break)",
    //   awayTeam: "-",
    //   homeScore: "-",
    //   awayScore: "-",
    //   date: "Dec 30",
    //   time: "11:30 PM",
    // },

    // JAN 1 (Day 6) — Semis (second leg) + Final
    {
      id: "2025-2026-Playoffs-Jan 1-1",
      year: "2025-2026",
      week: "Playoffs",
      day: "Jan 1",
      homeTeam: "SEMI FINAL A (SECOND LEG)",
      awayTeam: "TBD",
      homeScore: "-",
      awayScore: "-",
      date: "Jan 1",
      time: "9:00 PM",
    },
    {
      id: "2025-2026-Playoffs-Jan 1-2",
      year: "2025-2026",
      week: "Playoffs",
      day: "Jan 1",
      homeTeam: "SEMI FINAL B (SECOND LEG)",
      awayTeam: "TBD",
      homeScore: "-",
      awayScore: "-",
      date: "Jan 1",
      time: "9:30 PM",
    },
    {
      id: "2025-2026-Playoffs-Jan 1-break-1",
      year: "2025-2026",
      week: "Playoffs",
      day: "Jan 1",
      homeTeam: "(Break Extended)",
      awayTeam: "-",
      homeScore: "-",
      awayScore: "-",
      date: "Jan 1",
      time: "10:00 PM",
    },
    {
      id: "2025-2026-Playoffs-Jan 1-3",
      year: "2025-2026",
      week: "Playoffs",
      day: "Jan 1",
      homeTeam: "FINAL",
      awayTeam: "TBD",
      homeScore: "-",
      awayScore: "-",
      date: "Jan 1",
      time: "10:30 PM",
    },
  ];

  const playoffDays = weeks.find((w) => w.number === "Playoffs")?.days || [];

  const filteredMatches = placeholderMatches.filter(
    (match) =>
      match.year === selectedYear &&
      match.day === selectedDay &&
      ((typeof selectedWeek === "number" && match.week === selectedWeek) ||
        (selectedWeek === "Playoffs" && playoffDays.includes(match.day)))
  );

  const renderPlayoffMatches = (matches) => {
    return matches.map((match, index) => (
      <React.Fragment key={match.id}>
        {index === 2 && <h2 className="semifinals-header">SEMI FINALS</h2>}
        {index === 4 && <h2 className="finals-header">FINALS</h2>}
        <div className="match-card">
          <div className="match-team">
            <p className="team-name">{match.homeTeam}</p>
            <p className="team-score">{match.homeScore}</p>
          </div>
          <div className="match-vs">VS</div>
          <div className="match-team">
            <p className="team-name">{match.awayTeam}</p>
            <p className="team-score">{match.awayScore}</p>
          </div>
          <div className="match-info">
            <p className="match-date">{match.date}</p>
            <p className="match-time">{match.time}</p>
          </div>
        </div>
      </React.Fragment>
    ));
  };

  return (
    <div className="schedule-container">
      <Navbar />
      <main className="schedule-main">
        <div className="filters-row">
          <select
            value={selectedYear}
            onChange={(e) => {
              const newYear = e.target.value;
              setSelectedYear(newYear);

              const yearWeeks =
                weeksByYear[newYear] || weeksByYear["2024-2025"];
              const firstWeek = yearWeeks[0];
              setSelectedWeek(firstWeek.number);
              setSelectedDay(firstWeek.days[0]);
            }}
            className="filter-select">
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select
            value={selectedWeek}
            onChange={(e) => {
              const weekValue =
                e.target.value === "Playoffs"
                  ? "Playoffs"
                  : Number(e.target.value);

              setSelectedWeek(weekValue);

              const weekObj = weeks.find((w) => w.number === weekValue);
              if (weekObj?.days?.length) setSelectedDay(weekObj.days[0]);
            }}
            className="filter-select">
            {weeks.map((week) => (
              <option key={week.number} value={week.number}>
                {typeof week.number === "number"
                  ? `Week ${week.number}`
                  : week.number}
              </option>
            ))}
          </select>

          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="filter-select">
            {weeks
              .find((week) => week.number === selectedWeek)
              ?.days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
          </select>
        </div>
        <div className="matches-container">
          {filteredMatches.length > 0 ? (
            selectedWeek === "Playoffs" ? (
              renderPlayoffMatches(filteredMatches)
            ) : (
              filteredMatches.map((match) => (
                <div key={match.id} className="match-card">
                  <div className="match-team">
                    <p className="team-name">{match.homeTeam}</p>
                    <p className="team-score">{match.homeScore}</p>
                  </div>
                  <div className="match-vs">VS</div>
                  <div className="match-team">
                    <p className="team-name">{match.awayTeam}</p>
                    <p className="team-score">{match.awayScore}</p>
                  </div>
                  <div className="match-info">
                    <p className="match-date">{match.date}</p>
                    <p className="match-time">{match.time}</p>
                  </div>
                </div>
              ))
            )
          ) : (
            <div className="no-matches">
              Still working on this. Get outta here pal
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SchedulePage;
