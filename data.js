window.DEMO = {
 "run": {
  "id": "sandbox5-syn-2032",
  "started_pkt": "03 Oct 2026, 01:32 PKT",
  "deployment": "NIETE sandbox bot (bot-sandbox.up.railway.app), Meta, R2 rumi-sandbox, sandbox Supabase",
  "children": 5,
  "mode": "synthetic children with exact answer keys; printed-card protocol; strict pre-fill"
 },
 "chat": {
  "start": [
   {
    "dir": "out",
    "kind": "text",
    "text": "/egra",
    "time": "01:32"
   }
  ],
  "list": [
   {
    "dir": "in",
    "time": "01:32",
    "iso": "2026-10-02T20:32:46.734Z",
    "ok": true,
    "text": "آج کے بچے سرور نے چنے ہیں، بدلے نہیں جا سکتے۔ شروع کرنے کے لیے بچے پر ٹیپ کریں۔\nمکمل: ۵ میں سے ۰\nکلاس ٹیچر کو یہ رول نمبر اسی ترتیب سے دیں، تاکہ ایک وقت میں ایک بچہ آئے: ۸، ۲۵، ۱۵، ۶، ۳",
    "header": "جماعت ۳ · سیکشن A",
    "kind": "list",
    "button": "آج کے بچے",
    "sections": [
     {
      "title": "آج کے بچے",
      "rows": [
       {
        "title": "رول ۸ · Child 3A-08",
        "desc": "نیا"
       },
       {
        "title": "رول ۲۵ · Child 3A-25",
        "desc": "نیا"
       },
       {
        "title": "رول ۱۵ · Child 3A-15",
        "desc": "نیا"
       },
       {
        "title": "رول ۶ · Child 3A-06",
        "desc": "نیا"
       },
       {
        "title": "رول ۳ · Child 3A-03",
        "desc": "نیا"
       }
      ]
     },
     {
      "title": "متبادل",
      "rows": [
       {
        "title": "رول ۱۸ · Child 3A-18",
        "desc": "متبادل: صرف غیر حاضری یا انکار کی صورت میں"
       },
       {
        "title": "رول ۹ · Child 3A-09",
        "desc": "متبادل: صرف غیر حاضری یا انکار کی صورت میں"
       }
      ]
     }
    ]
   }
  ],
  "pick": [
   {
    "dir": "out",
    "kind": "text",
    "text": "رول ۸ · Child 3A-08",
    "time": "01:32",
    "reply": true
   },
   {
    "dir": "in",
    "time": "01:32",
    "iso": "2026-10-02T20:32:47.468Z",
    "ok": true,
    "text": "مشاہدے والے ٹیچر اسی جماعت کے کلاس ٹیچر ہیں۔ آج کے رول نمبر ترتیب سے انہیں بھیج دیں؟",
    "kind": "buttons",
    "buttons": [
     "ٹیچر کو بھیجیں"
    ],
    "linkedOnly": true
   },
   {
    "dir": "in",
    "time": "01:32",
    "iso": "2026-10-02T20:32:51.401Z",
    "ok": true,
    "text": "*بچہ ۱ از ۵*\nرول ۸ · Child 3A-08\nکیا بچہ موجود ہے اور پڑھنے پر آمادہ ہے؟",
    "kind": "buttons",
    "buttons": [
     "موجود",
     "غیر حاضر",
     "انکار"
    ]
   }
  ],
  "present": [
   {
    "dir": "out",
    "kind": "text",
    "text": "موجود",
    "time": "01:32",
    "reply": true
   },
   {
    "dir": "in",
    "time": "01:32",
    "iso": "2026-10-02T20:32:57.701Z",
    "ok": true,
    "text": "*بچہ ۱ از ۵ · اردو ۱/۳* · فارم ⁦A⁩ کارڈ، اردو صفحہ · «اب شروع کریں» کہیں · ایک لاک وائس نوٹ، صفحے پلٹیں، ریکارڈنگ نہ روکیں\nانتظار کے دوران رول ۲۵ کو ریاضی کی پٹی لکھنے کو دیں۔",
    "kind": "buttons",
    "buttons": [
     "چھپا کارڈ نہیں",
     "یہ بچہ روکیں",
     "مینو"
    ]
   }
  ],
  "urdu": [
   {
    "dir": "out",
    "kind": "voice",
    "time": "01:33",
    "audio": "audio/child1-urdu.m4a",
    "secs": 101
   },
   {
    "dir": "in",
    "time": "01:33",
    "iso": "2026-10-02T20:33:01.889Z",
    "ok": true,
    "kind": "text",
    "text": "🎧 ملا · اردو"
   },
   {
    "dir": "in",
    "time": "01:33",
    "iso": "2026-10-02T20:33:02.488Z",
    "ok": true,
    "text": "*بچہ ۱ از ۵ · انگریزی ۲/۳* · فارم ⁦A⁩ کارڈ، انگریزی صفحہ · «Please start reading» کہیں · ایک لاک وائس نوٹ، صفحے پلٹیں، ریکارڈنگ نہ روکیں",
    "kind": "buttons",
    "buttons": [
     "چھپا کارڈ نہیں",
     "یہ بچہ روکیں",
     "مینو"
    ]
   }
  ],
  "english": [
   {
    "dir": "out",
    "kind": "voice",
    "time": "01:33",
    "audio": "audio/child1-english.m4a",
    "secs": 91
   },
   {
    "dir": "in",
    "time": "01:33",
    "iso": "2026-10-02T20:33:07.472Z",
    "ok": true,
    "kind": "text",
    "text": "🎧 ملا · انگریزی"
   },
   {
    "dir": "in",
    "time": "01:33",
    "iso": "2026-10-02T20:33:11.036Z",
    "ok": true,
    "text": "*بچہ ۱ از ۵ · ریاضی ۳/۳* · فارم ⁦A⁩ کارڈ، ریاضی صفحہ · «اب یہ نمبر باری باری پڑھیں» کہیں، پھر «اب سوال شروع کریں» اور ۶۰ سیکنڈ زبانی سوال · ایک لاک وائس نوٹ",
    "kind": "buttons",
    "buttons": [
     "چھپا کارڈ نہیں",
     "یہ بچہ روکیں",
     "مینو"
    ]
   }
  ],
  "maths": [
   {
    "dir": "out",
    "kind": "voice",
    "time": "01:33",
    "audio": "audio/child1-maths.m4a",
    "secs": 82
   },
   {
    "dir": "in",
    "time": "01:33",
    "iso": "2026-10-02T20:33:23.030Z",
    "ok": true,
    "kind": "text",
    "text": "🎧 ملا · ریاضی"
   },
   {
    "dir": "in",
    "time": "01:33",
    "iso": "2026-10-02T20:33:28.973Z",
    "ok": true,
    "text": "رول ۸ کی پٹی: لکھی جا چکے تو تصویر بھیجیں، یا آخر میں سب پٹیاں ایک ساتھ۔ ابھی اگلے بچے پر ٹیپ کریں۔",
    "kind": "buttons",
    "buttons": [
     "تصویر نہیں"
    ]
   },
   {
    "dir": "in",
    "time": "01:33",
    "iso": "2026-10-02T20:33:35.288Z",
    "ok": true,
    "text": "آج کے بچے سرور نے چنے ہیں، بدلے نہیں جا سکتے۔ شروع کرنے کے لیے بچے پر ٹیپ کریں۔\nمکمل: ۵ میں سے ۰\nکلاس ٹیچر کو یہ رول نمبر اسی ترتیب سے دیں، تاکہ ایک وقت میں ایک بچہ آئے: ۲۵، ۱۵، ۶، ۳",
    "header": "جماعت ۳ · سیکشن A",
    "kind": "list",
    "button": "آج کے بچے",
    "sections": [
     {
      "title": "آج کے بچے",
      "rows": [
       {
        "title": "رول ۸ · Child 3A-08",
        "desc": "نیا · جاری"
       },
       {
        "title": "رول ۲۵ · Child 3A-25",
        "desc": "نیا"
       },
       {
        "title": "رول ۱۵ · Child 3A-15",
        "desc": "نیا"
       },
       {
        "title": "رول ۶ · Child 3A-06",
        "desc": "نیا"
       },
       {
        "title": "رول ۳ · Child 3A-03",
        "desc": "نیا"
       }
      ]
     },
     {
      "title": "متبادل",
      "rows": [
       {
        "title": "رول ۱۸ · Child 3A-18",
        "desc": "متبادل: صرف غیر حاضری یا انکار کی صورت میں"
       },
       {
        "title": "رول ۹ · Child 3A-09",
        "desc": "متبادل: صرف غیر حاضری یا انکار کی صورت میں"
       }
      ]
     }
    ]
   }
  ],
  "strip": [
   {
    "dir": "out",
    "kind": "image",
    "src": "img/strip/strip-g3-00-d1.jpg",
    "time": "01:33"
   },
   {
    "dir": "in",
    "time": "01:33",
    "iso": "2026-10-02T20:33:41.609Z",
    "ok": true,
    "kind": "text",
    "text": "📷 رول ۸ کی پٹی محفوظ۔"
   },
   {
    "dir": "in",
    "time": "01:33",
    "iso": "2026-10-02T20:33:47.016Z",
    "ok": true,
    "kind": "text",
    "text": "✅ رول ۸ کے تینوں حصے مل گئے۔ نمبر لگنے کے بعد چیک کا بٹن آئے گا۔"
   }
  ],
  "next": [
   {
    "dir": "out",
    "kind": "text",
    "text": "رول ۲۵ · Child 3A-25",
    "time": "01:33",
    "reply": true
   },
   {
    "dir": "in",
    "time": "01:33",
    "iso": "2026-10-02T20:33:53.219Z",
    "ok": true,
    "text": "*بچہ ۲ از ۵*\nرول ۲۵ · Child 3A-25\nکیا بچہ موجود ہے اور پڑھنے پر آمادہ ہے؟",
    "kind": "buttons",
    "buttons": [
     "موجود",
     "غیر حاضر",
     "انکار"
    ]
   },
   {
    "dir": "out",
    "kind": "text",
    "text": "موجود",
    "time": "01:34",
    "reply": true
   }
  ],
  "check": [
   {
    "dir": "in",
    "time": "01:33",
    "iso": "2026-10-02T20:33:58.973Z",
    "ok": true,
    "text": "رول نمبر 8 کے لیے ریکارڈنگ سے نمبر: اردو 57 الفاظ، انگریزی 58 الفاظ، حساب 28 فوری سوال۔ جانچ کھولیں، جو مختلف سنا ہو بدلیں، اور محفوظ کریں۔ تقریباً ایک منٹ۔",
    "header": "جانچ: رول نمبر 8",
    "kind": "flow",
    "button": "جانچ کریں"
   }
  ]
 },
 "listRows": [
  {
   "title": "رول ۸ · Child 3A-08",
   "desc": "نیا"
  },
  {
   "title": "رول ۲۵ · Child 3A-25",
   "desc": "نیا"
  },
  {
   "title": "رول ۱۵ · Child 3A-15",
   "desc": "نیا"
  },
  {
   "title": "رول ۶ · Child 3A-06",
   "desc": "نیا"
  },
  {
   "title": "رول ۳ · Child 3A-03",
   "desc": "نیا"
  }
 ],
 "alternates": [
  {
   "title": "رول ۱۸ · Child 3A-18",
   "desc": "متبادل: صرف غیر حاضری یا انکار کی صورت میں"
  },
  {
   "title": "رول ۹ · Child 3A-09",
   "desc": "متبادل: صرف غیر حاضری یا انکار کی صورت میں"
  }
 ],
 "timings": {
  "urdu_saved_s": 4.1,
  "english_saved_s": 3.3,
  "maths_saved_s": 3.2,
  "urdu_scored_after_note_s": 33.1,
  "english_scored_after_note_s": 25.7,
  "maths_scored_after_photo_s": 16.4,
  "check_sent_after_photo_s": 18.4,
  "present_to_urdu_prompt_s": 1.1
 },
 "calls": {
  "urdu": [
   {
    "job": "stt",
    "model": "soniox:stt-async-v5",
    "s": 4.9,
    "usd": 0.0038
   },
   {
    "job": "comprehension",
    "model": "google/gemini-3-flash-preview",
    "s": 1.7,
    "usd": 0.00088
   },
   {
    "job": "phonics",
    "model": "google/gemini-3.8-flash",
    "s": 8.1,
    "usd": 0.00571
   },
   {
    "job": "story",
    "model": "google/gemini-3.8-flash",
    "s": 21.4,
    "usd": 0.01393
   }
  ],
  "english": [
   {
    "job": "stt",
    "model": "soniox:stt-async-v5",
    "s": 5.6,
    "usd": 0.00341
   },
   {
    "job": "comprehension",
    "model": "google/gemini-3-flash-preview",
    "s": 1.3,
    "usd": 0.00068
   },
   {
    "job": "speechace",
    "model": "speechace:text/v9",
    "s": 2.6,
    "usd": 0.016
   },
   {
    "job": "speechace",
    "model": "speechace:text/v9",
    "s": 1.5,
    "usd": 0.016
   },
   {
    "job": "phonics",
    "model": "google/gemini-3.8-flash",
    "s": 13,
    "usd": 0.00721
   },
   {
    "job": "story",
    "model": "google/gemini-3.8-flash",
    "s": 13.9,
    "usd": 0.00919
   },
   {
    "job": "speechace_nonwords",
    "model": "speechace:text/v9",
    "s": 1.7,
    "usd": 0.008
   }
  ],
  "maths": [
   {
    "job": "stt",
    "model": "soniox:stt-async-v5",
    "s": 4.4,
    "usd": 0.00308
   },
   {
    "job": "labeller",
    "model": "google/gemini-3-flash-preview",
    "s": 0.9,
    "usd": 0.00042
   },
   {
    "job": "vision",
    "model": "google/gemini-3.1-pro-preview",
    "s": 7.7,
    "usd": 0.01375
   }
  ]
 },
 "blockSeconds": {
  "urdu": 27.8,
  "english": 21.6,
  "maths": 9.6
 },
 "cost_child1": 0.10204,
 "prefill_child1": {
  "fields": 41,
  "shown_empty": 22,
  "prefilled": 19
 },
 "check_s_child1": 107.5,
 "edits_child1": [
  {
   "block": "urdu",
   "path": "story.words_correct",
   "ai": 57,
   "coach": 58
  },
  {
   "block": "urdu",
   "path": "story.flagged[43]",
   "ai": "wrong",
   "coach": "correct"
  },
  {
   "block": "english",
   "path": "story.flagged[41]",
   "ai": "wrong",
   "coach": "correct"
  },
  {
   "block": "english",
   "path": "nonwords[e3A-nw1].verdict",
   "ai": "wrong",
   "coach": "correct"
  },
  {
   "block": "english",
   "path": "nonwords[e3A-nw2].verdict",
   "ai": "wrong",
   "coach": "correct"
  },
  {
   "block": "english",
   "path": "nonwords[e3A-nw4].verdict",
   "ai": "wrong",
   "coach": "correct"
  },
  {
   "block": "english",
   "path": "nonwords[e3A-nw5].verdict",
   "ai": "wrong",
   "coach": "correct"
  },
  {
   "block": "maths",
   "path": "maths.numbers[m3A-n1].verdict",
   "ai": "none",
   "coach": "correct"
  },
  {
   "block": "maths",
   "path": "maths.quick_sums.correct",
   "ai": 28,
   "coach": 30
  }
 ],
 "story_child1": [
  {
   "block": "urdu",
   "ai": 57,
   "key": 58,
   "conf": 0.69
  },
  {
   "block": "english",
   "ai": 58,
   "key": 56,
   "conf": 0.94
  }
 ],
 "five": [
  {
   "child": "fluent",
   "roll": 8,
   "bot": 44.0,
   "speak": 274.2,
   "test": 318.2,
   "wait": 18.4,
   "check": 107.5,
   "total": 425.7,
   "prefilled": 19,
   "fields": 41,
   "usd": 0.10204
  },
  {
   "child": "average",
   "roll": 25,
   "bot": 57.0,
   "speak": 294.9,
   "test": 351.9,
   "wait": 23.2,
   "check": 114.0,
   "total": 465.9,
   "prefilled": 17,
   "fields": 41,
   "usd": 0.1126
  },
  {
   "child": "struggling",
   "roll": 15,
   "bot": 55.0,
   "speak": 311.2,
   "test": 366.2,
   "wait": 29.3,
   "check": 128.6,
   "total": 494.8,
   "prefilled": 10,
   "fields": 39,
   "usd": 0.09214
  },
  {
   "child": "nonreader",
   "roll": 6,
   "bot": 57.2,
   "speak": 238.8,
   "test": 296.0,
   "wait": 27.6,
   "check": 133.4,
   "total": 429.4,
   "prefilled": 9,
   "fields": 40,
   "usd": 0.05904
  },
  {
   "child": "skipper",
   "roll": 3,
   "bot": 56.8,
   "speak": 289.4,
   "test": 346.2,
   "wait": 25.0,
   "check": 144.4,
   "total": 490.6,
   "prefilled": 15,
   "fields": 41,
   "usd": 0.11417
  }
 ],
 "visit": {
  "children": 5,
  "tests_s": 1678.5,
  "checks_s": 628.0,
  "five_child_total_s": 2306.5,
  "target_s": 1800,
  "driver_wall_s": 443.666,
  "note": "test time is the bot's measured time per child plus the child's own speaking time (fixture length) unless the run held notes --realtime; the coach's cue lines, child hand-over and strip writing are NOT in it (see sim/PROTOCOL_TIMING.md for those)"
 },
 "accuracy": {
  "sessions": 5,
  "grade_ok": 5,
  "story": {
   "urdu": {
    "ai": {
     "n": 5,
     "r": 0.99,
     "mae": 2.8,
     "bias": -2.4,
     "exact": 20,
     "within1": 60,
     "within3": 80,
     "within5": 80
    },
    "ai_cut_ok": {
     "n": 0
    },
    "ai_words": {
     "flags": 18,
     "precision": 0.94,
     "recall": 0.94
    },
    "coach": {
     "n": 3,
     "r": 1,
     "mae": 0,
     "bias": 0,
     "exact": 100,
     "within1": 100,
     "within3": 100,
     "within5": 100
    },
    "coach_cut_ok": {
     "n": 0
    },
    "coach_words": {
     "flags": 15,
     "precision": 1,
     "recall": 0.88
    }
   },
   "english": {
    "ai": {
     "n": 4,
     "r": 0.98,
     "mae": 3.8,
     "bias": -2.7,
     "exact": 25,
     "within1": 25,
     "within3": 50,
     "within5": 75
    },
    "ai_cut_ok": {
     "n": 0
    },
    "ai_words": {
     "flags": 15,
     "precision": 0.8,
     "recall": 0.75
    },
    "coach": {
     "n": 4,
     "r": 1,
     "mae": 0.5,
     "bias": 0.5,
     "exact": 75,
     "within1": 75,
     "within3": 100,
     "within5": 100
    },
    "coach_cut_ok": {
     "n": 0
    },
    "coach_words": {
     "flags": 11,
     "precision": 1,
     "recall": 0.65
    }
   }
  },
  "items": {
   "questions": {
    "ai": {
     "n": 20,
     "missing": 0,
     "agree": 100
    },
    "coach": {
     "n": 20,
     "missing": 0,
     "agree": 100
    }
   },
   "first_sounds": {
    "ai": {
     "n": 25,
     "missing": 0,
     "agree": 96
    },
    "coach": {
     "n": 25,
     "missing": 0,
     "agree": 100
    }
   },
   "nonwords": {
    "ai": {
     "n": 57,
     "missing": 0,
     "agree": 79
    },
    "coach": {
     "n": 57,
     "missing": 0,
     "agree": 100
    }
   },
   "numbers": {
    "ai": {
     "n": 36,
     "missing": 0,
     "agree": 81
    },
    "coach": {
     "n": 36,
     "missing": 0,
     "agree": 97
    }
   },
   "written": {
    "ai": {
     "n": 20,
     "missing": 0,
     "agree": 95
    },
    "coach": {
     "n": 20,
     "missing": 0,
     "agree": 100
    }
   },
   "word_problem": {
    "ai": {
     "n": 5,
     "missing": 0,
     "agree": 100
    },
    "coach": {
     "n": 5,
     "missing": 0,
     "agree": 100
    }
   }
  },
  "quick_sums": {
   "ai": {
    "n": 5,
    "r": 1,
    "mae": 3,
    "bias": -3,
    "exact": 0,
    "within1": 0,
    "within3": 60,
    "within5": 100
   },
   "coach": {
    "n": 5,
    "r": 1,
    "mae": 0,
    "bias": 0,
    "exact": 100,
    "within1": 100,
    "within3": 100,
    "within5": 100
   }
  },
  "fallback": {
   "letters": {
    "ai": {
     "n": 1,
     "r": null,
     "mae": 3,
     "bias": -3,
     "exact": 0,
     "within1": 0,
     "within3": 100,
     "within5": 100
    },
    "coach": {
     "n": 1,
     "r": null,
     "mae": 0,
     "bias": 0,
     "exact": 100,
     "within1": 100,
     "within3": 100,
     "within5": 100
    }
   },
   "words": {
    "ai": {
     "n": 1,
     "r": null,
     "mae": 2,
     "bias": 2,
     "exact": 0,
     "within1": 0,
     "within3": 100,
     "within5": 100
    },
    "coach": {
     "n": 1,
     "r": null,
     "mae": 0,
     "bias": 0,
     "exact": 100,
     "within1": 100,
     "within3": 100,
     "within5": 100
    }
   }
  },
  "prefill": {
   "fields": 202,
   "shown_empty": 132,
   "prefilled": 70,
   "rate": 0.35,
   "keyed_rate": 0.38,
   "nokey_fields": 20,
   "empty_by_field": {
    "english:fallback": 1,
    "english:nonwords": 40,
    "english:questions": 2,
    "english:story.words_attempted": 2,
    "english:story.words_correct": 2,
    "maths:maths.numbers": 19,
    "maths:maths.quick_sums": 5,
    "urdu:fallback": 2,
    "urdu:first_sounds": 25,
    "urdu:nonwords": 25,
    "urdu:questions": 3,
    "urdu:story.words_attempted": 3,
    "urdu:story.words_correct": 3
   }
  },
  "cost_usd_per_child": 0.096
 },
 "strips": [
  {
   "roll": 8,
   "file": "strip-g3-00-d1.jpg",
   "difficulty": 1,
   "damage": [
    "crumple",
    "perspective:0.06",
    "brightness:0.96",
    "sensor_noise",
    "jpeg_q:64"
   ],
   "items": [
    {
     "prompt": "34 + 28",
     "written": "(blank)",
     "ai": "(blank)",
     "ai_verdict": "blank",
     "key_verdict": "blank"
    },
    {
     "prompt": "56 + 27",
     "written": "85",
     "ai": "85",
     "ai_verdict": "wrong",
     "key_verdict": "wrong"
    },
    {
     "prompt": "52 − 17",
     "written": "35",
     "ai": "35",
     "ai_verdict": "correct",
     "key_verdict": "correct"
    },
    {
     "prompt": "73 − 48",
     "written": "(blank)",
     "ai": "(blank)",
     "ai_verdict": "blank",
     "key_verdict": "blank"
    },
    {
     "prompt": "word problem (15 − 6)",
     "written": "9",
     "ai": "9",
     "ai_verdict": "correct",
     "key_verdict": "correct"
    }
   ]
  },
  {
   "roll": 3,
   "file": "strip-g3-08-d4.jpg",
   "difficulty": 4,
   "damage": [
    "crumple",
    "perspective:0.16",
    "hard_shadow",
    "glare",
    "brightness:0.66",
    "blur:1.2",
    "sensor_noise",
    "jpeg_q:27"
   ],
   "items": [
    {
     "prompt": "34 + 28",
     "written": "60",
     "ai": "60",
     "ai_verdict": "wrong",
     "key_verdict": "wrong"
    },
    {
     "prompt": "56 + 27",
     "written": "(blank)",
     "ai": "(blank)",
     "ai_verdict": "blank",
     "key_verdict": "blank"
    },
    {
     "prompt": "52 − 17",
     "written": "35",
     "ai": "35",
     "ai_verdict": "correct",
     "key_verdict": "correct"
    },
    {
     "prompt": "73 − 48",
     "written": "25",
     "ai": "25",
     "ai_verdict": "correct",
     "key_verdict": "correct"
    },
    {
     "prompt": "word problem (15 − 6)",
     "written": "9",
     "ai": "9",
     "ai_verdict": "correct",
     "key_verdict": "correct"
    }
   ]
  }
 ],
 "issues": [
  {
   "title": "Open: decisions only the operator (or named owners) can make",
   "head": [
    "#",
    "Issue",
    "Why it matters",
    "Owner",
    "Bead"
   ],
   "rows": [
    [
     "D1",
     "**Consent and notice for recording children**",
     "Every child is recorded. No document names who consents, how parents are told, or how long audio is kept. Blocks any real-child pilot (not the sandbox).",
     "Unassigned",
     "bd-s1oo0.31"
    ],
    [
     "D2",
     "**Instrument trim and fidelity (D3)**: quick sums 30 or 60 s; any section cuts for 5 min per child; letter names for first sounds; اہم ہیں / اہم ہے; partial answers. **Added 3 Oct from the standards check** (`research/EGRA_EGMA_STANDARDS_CHECK.md`): call it EGRA/EGMA-derived; maths (keep ours and label the variants, move toward Core EGMA, or use the May items for comparison with Rawalpindi); a 3rd English question; card face-down before questions or allow lookbacks; Grade 5 continuation difficulty; pilot-equate Form B; device test of the voice recorder with an image open",
     "The child's own speaking time is 4–5 minutes; five minutes per child is not reachable without a content decision. Quick sums at 30 s saves about 30 s per child.",
     "Sabeena + Sameer",
     "bd-s1oo0.32"
    ],
    [
     "D3",
     "**Pre-fill default for the check**: strict (empty when unsure) or assist (filled, unsure ones named)",
     "Decides check time: 107–144 s per child in strict mode. Recommendation: keep strict, pilot assist with one filmed coach.",
     "Operator",
     "bd-s1oo0.29"
    ],
    [
     "D4",
     "**SpeechAce** for English per-word marks",
     "Best per-word English marks measured; costs about 2–3 cents more per child.",
     "Operator",
     "bd-s1oo0.33"
    ],
    [
     "D5",
     "**App path release**: Play build with `RECORD_AUDIO` (versionCode 1216+), and production R2 CORS for `portal.niete.edu.pk`",
     "The in-app recorder cannot reach coaches' phones without both. WhatsApp works without them.",
     "Operator / release owner",
     "bd-s1oo0.34"
    ]
   ]
  },
  {
   "title": "Open: product and accuracy issues",
   "head": [
    "#",
    "Issue",
    "Evidence",
    "Bead"
   ],
   "rows": [
    [
     "P1",
     "**Five minutes per child is not met**",
     "Sandbox, full battery (synthetic): test 28.0 min + checks 10.5 min = 38.4 min for five, of which about 4.3 min was simulator artefact (pacer wait from back-to-back notes, driver read delay; L22). At real speed the projection is 35.4 min (L22, `--realtime`). Real May children (partial battery): 20.8 + 11.6 = 32.4 min. Protocol model: 6.0 min per child at quick sums 60 s, 5.5 at 30 s (`sim/PROTOCOL_TIMING.md`). The bot is 30–60 s of it; the rest is the child's speaking and the coach's check.",
     "(D2, D3)"
    ],
    [
     "P2",
     "**Low pre-fill in strict mode**",
     "Real children (L23, 185): per child 1.6 fields arrive filled (1.1 confirmed, 0.5 changed) and 10.7 arrive empty; about 2 minutes per check. Synthetic run: 70 of 202 check fields (35%) arrived filled. A fluent child's Urdu story count (AI 57, key 58) arrived empty: the Urdu story count is never pre-filled (`thresholds.js` bar NEVER, because on the 53 real children of L5 its confidence did not predict accuracy). All 40 English made-up-word fields and all 25 first-sound fields arrived empty.",
     "bd-s1oo0.29"
    ],
    [
     "P3",
     "~~The check message states numbers that the form then leaves empty~~ **Fixed on sandbox, 3 Oct** (drop 5 #1543; verified on real WhatsApp)",
     "Child 1: the Flow message says \"Urdu 57 words, English 58 words, maths 28 quick sums\", and the form's Urdu story field is empty (the Urdu story count is never pre-filled). Confusing for the coach: either show the number with \"please check\", or do not state it. The same message promises \"about a minute\"; the measured check was 107–144 s per child.",
     "bd-s1oo0.27"
    ],
    [
     "P4",
     "~~\"Send to teacher\" disappears now that the child test is separate from the observation~~ **Fixed on sandbox, 3 Oct** (drop 5 #1543; verified on real WhatsApp)",
     "The button needs the observed teacher, which only the observation visit supplies. With `CHILD_TEST_OBSERVE_LINK` unset (default since 3 Oct), `/egra` has no teacher, so the coach reads the roll order (still in the list message) to the class teacher. Fix options: ask the coach which class teacher, or pick the class teacher from the drawn class.",
     "bd-s1oo0.28"
    ],
    [
     "P5",
     "**Weaker AI fields**",
     "L23, all 185 May 2026 Rawalpindi children against the enumerators (human floor in brackets = QA reviewers agreeing with the enumerator): story counts within ±5 Urdu 70% (58%), English 77% (59%), i.e. as good as a second human; Urdu questions 73% (82%), 86% when ≥ 0.90 sure; English questions 61% (76%); English made-up words 49% = marking all wrong (63%); quick sums within ±3 59% (95%); letters/words 21–71% (60–90%); chips precision 0.22 / 0.06. Synthetic children score far higher and must not be quoted as accuracy.",
     "bd-s1oo0.40"
    ],
    [
     "P6",
     "**No real classroom audio yet**",
     "Accuracy rests on May enumerator recordings (8 kHz) and synthetic voices. Real coach voice notes from a classroom (noise, distance, 16 kHz) are untested. The stopwatch pilot (`rollout/PILOT_PLAN.md`) answers this, after D1.",
     "—"
    ],
    [
     "P7",
     "**Only schools with Grade 3 / 5 class lists can run**",
     "The draw needs a roster. 254 of 424 schools had both on 27 Sep (Learning Signal study); the rest get \"no class list\".",
     "—"
    ],
    [
     "P8",
     "~~The 👍 reaction on each coach message fails~~ **Closed: simulation artefact (L22)**",
     "The 400s are Meta 131009 \"invalid message_id\" on the simulator's injected ids (0 in 14 days of NIETE production). The \"429s\" are our own pacer skipping an optional 👍, mislabelled as 429 (Meta returned 0 rate-limit refusals in 14 days, 511,515 reactions delivered). The ~6 s reply gaps came from sending notes back to back; at real speed the pacer waits 0 s and replies land 0.6–1.2 s apart. Echo now carries `local: skipped`; simulator fixed (PR #1541). Spin-off: the webhook awaits the 👍 before handling each message, p50 0.63 s on every NIETE feature (bd-x7en0).",
     "bd-s1oo0.30"
    ],
    [
     "P9",
     "**In separate mode the coach cannot choose the grade**",
     "With no observation there is no observed class, so the draw picks the grade by the order of test visits to the school this quarter: Grade 3 on the first, Grade 5 on the next, and so on, falling back to the other grade when one has no class list (`draw/index.js` `todaysList`: `prior.size % 2`). Linked mode used the observed teacher's class. Fine if the plan is one visit per grade per quarter; wrong the day a coach wants the other grade. Fix option: when both grades have a list, ask the coach (two buttons).",
     "bd-s1oo0.35"
    ],
    [
     "P10",
     "~~A drawn child with no roll number breaks `/egra` for that class~~ **Fixed on sandbox, 3 Oct** (drop 5 #1543; verified on real WhatsApp)",
     "The draw includes children with no roll; building the list then throws (`resolveUx: missing param \"roll\"` on `childTestRowTitle`, reproduced with the real catalogue). The handler swallows it, so the coach gets no list, and because the draw is already saved, every retry that quarter fails the same way. NIETE roster 3 Oct (read replica, 924 Grade 3/5 classes with children): 1,084 of 31,826 children (3.4%) have no roll; 29 classes have none at all. Expected in 5.4% of first draws, certain in 33 classes, possible in 73; 56 of 315 schools have a roll-less child in Grade 3 or 5. The strips-batch line (`childTestStripsBatch`) has the same fault.",
     "bd-s1oo0.36"
    ],
    [
     "P11",
     "~~Roll numbers are not a stable way to find a child; the name should lead~~ **Fixed on sandbox, 3 Oct** (drop 5 #1543; verified on real WhatsApp)",
     "The coach does see the name (list row \"Roll 8 · name\", presence prompt), but the class-teacher line and the strips-batch line give roll numbers only, and the row puts the roll first. NIETE roster 3 Oct: rolls are the register's serial column read from a photo (83% of classes are exactly 1…N), registers are rewritten monthly and renumber (roster code note: the same children moved from rolls 23–25 to 26–28), 30,555 of 31,826 children were imported in September, and no admission numbers are recorded (0%). By later months the roll on our list can point at a different line in the teacher's register. Names: 100% present but 98.9% in English letters and 0% have an Urdu-script name; 6.6% are cut off by the 24-character row limit; 2.0% of children share their name with a classmate (194 classes). The strip's \"Roll no.\" box is never read: a strip photo goes to the oldest child still missing one, so a batch sent out of order attaches to the wrong child silently. Fix: lead with the name everywhere (row, teacher line, strips line), roll as a hint when present; name on the strip; optionally have the vision call read the strip's name and flag a mismatch. Whether teachers actually call children by roll in ICT schools is a field question the data cannot answer.",
     "bd-s1oo0.37"
    ],
    [
     "P12",
     "~~The stop rule sends real readers to the non-reader fallback~~ **Fixed on sandbox, 3 Oct** (drop 5 #1543; verified on real WhatsApp)",
     "L23: 12 reading notes went to letters/words although the AI's own count was 20–53 words right (enumerator ≥ 30 in 11); the model marked line 1 `skipped`, and the check Flow then hides the story count, so the child looks like a non-reader.",
     "bd-s1oo0.42"
    ],
    [
     "P13",
     "~~The story minute is cut short while the child is still reading~~ **Fixed on sandbox, 3 Oct** (drop 5 #1543; verified on real WhatsApp)",
     "L23: 24 of 370 reading notes (6.5%): a comprehension question's words matched the child reading the story (14), the labeller placed a later section inside the minute (7), a stop-cue match (3). Lowers the count and feeds P12.",
     "bd-s1oo0.42"
    ],
    [
     "P14",
     "**A check message already delivered keeps the old Flow after a republish**",
     "Real WhatsApp capture, 3 Oct: after the fixed check Flow was republished, reopening the earlier check message (even after reloading WhatsApp Web) still showed the old version; a new check message opened the new one. Rollout note: after any check-Flow republish, pending checks need a fresh message (tap the child in today's list to resend it).",
     "—"
    ]
   ]
  },
  {
   "title": "Decided",
   "head": [
    "When",
    "Decision"
   ],
   "rows": [
    [
     "2 Oct",
     "Build in NIETE-Rumi, sandbox first; 4 new + 1 returning; seeded per-quarter draw with no redraws; printed card as the main stimulus; study models; AI marks stored once, coach marks beside them."
    ],
    [
     "2 Oct",
     "Pilot allow-list `CHILD_TEST_COACH_IDS`; quick-sums length is one setting (`CHILD_TEST_QUICK_SUMS_SECONDS` on sandbox)."
    ],
    [
     "3 Oct",
     "**Kept separate from the observation** (operator): no offer after `/observe2` or classic `/observe`; `/egra` stands alone and draws on the coach's school. `CHILD_TEST_OBSERVE_LINK=true` restores the link. bd-s1oo0.25, PR #1526 → sandbox #1527 (`b37f6635`), live on sandbox 3 Oct 13:08 UTC (bot, sqs-worker, sqs-worker-video, portal SUCCESS; uptime reset). Probe `sandbox1-separate-1313`: same five drawn, no \"Send to teacher\", check saved. Not on staging or main."
    ]
   ]
  },
  {
   "title": "Fixed (red-first, merged, on sandbox)",
   "head": [
    "Bead",
    "What was wrong",
    "Fix"
   ],
   "rows": [
    [
     "bd-s1oo0.14",
     "Three quick voice notes overwrote one block",
     "Block claimed before upload"
    ],
    [
     "bd-s1oo0.15",
     "In-chat card images cost 35–60 s per block (send pacing)",
     "Printed card by default; cards only on \"No printed card\""
    ],
    [
     "bd-s1oo0.19",
     "Check Flow would not publish on Meta",
     "Number inputs fixed"
    ],
    [
     "bd-s1oo0.20",
     "End-to-end accuracy looked worse than the offline evaluation",
     "Comparison bugs fixed; the pipeline matches the offline evaluation"
    ],
    [
     "bd-s1oo0.21",
     "Urdu made-up-word confidence stuck at 0.6",
     "Real confidence; assist mode added"
    ],
    [
     "bd-s1oo0.22",
     "A restart mid-visit left a block unscored forever",
     "Database claim + recovery sweep"
    ],
    [
     "bd-s1oo0.24",
     "English story returned no JSON for near-non-readers",
     "Strict JSON schema for the story call"
    ],
    [
     "bd-s1oo0.43",
     "**The check could not be saved**: count inputs were `phone` type, so WhatsApp showed \"Enter a valid phone number\" for any count (found in the real WhatsApp capture, 3 Oct)",
     "Counts are text inputs (3 chars); the endpoint reads Latin, Urdu and Arabic-Indic digits; Flow republished; a real check saved through WhatsApp"
    ],
    [
     "bd-s1oo0.36 / .37",
     "A child without a roll broke `/egra`; children were named by roll",
     "Full name first, roll as a hint; never throws (live on sandbox)"
    ],
    [
     "bd-s1oo0.38",
     "Strips matched by order only",
     "Child no. on the strip, read at receipt; any order works"
    ],
    [
     "bd-s1oo0.27 / .28",
     "Check message stated empty numbers; no \"Send to teacher\" in separate mode",
     "States only what is filled; class teacher offered from the drawn class"
    ],
    [
     "bd-s1oo0.42",
     "Stop rule hid readers; story minute cut short",
     "12 → 0; 24 → 2 (real pairs)"
    ],
    [
     "(L0)",
     "Maths would have been scored before the strip photo arrived; the maths script put the quick-sums cue before the numbers",
     "Maths scored once with `force` when the photo is in or declined; numbers cue first"
    ]
   ]
  }
 ],
 "probe": {
  "when_pkt": "18:13",
  "messages": 14,
  "delivered": 14,
  "noSendToTeacher": true,
  "sameFive": true,
  "checkSaved": true,
  "note": "Checked again on sandbox after the change (3 Oct, 18:13 Pakistan time, one synthetic child, no observation): <code>/egra</code> drew the same five in the same order, no “Send to teacher” message came, all three parts were marked, and the check saved. 14 of 14 messages delivered. The coach-facing text of every other message matches this replay; the only difference is the AI's English count for the same recording (58 on 2 Oct, 57 on 3 Oct). The earlier draw had been deleted before the check, so the same five coming back is the seeded draw at work."
 },
 "real": {
  "source": "L23, 3 Oct: the go-live pipeline on all 185 children of the May 2026 Rawalpindi study (Grades 1–5, 555 voice notes), against the enumerator's tablet marks. Human floor: how often a QA reviewer, re-listening to the same children, agreed with the enumerator",
  "rows": [
   [
    "Story: words read right, Urdu (within 5)",
    "70% (n 108)",
    "58%",
    "never pre-filled: its confidence ranks the wrong way (fix under way)"
   ],
   [
    "Story: words read right, English (within 5)",
    "77% (n 79)",
    "59%",
    "pre-filled when confident: 22% of children, 76% right"
   ],
   [
    "Story questions, Urdu",
    "73% (n 182); 86% when very sure",
    "82%",
    "pre-filled when very sure (bar raised to 0.90)"
   ],
   [
    "Story questions, English",
    "61% (n 46); 82% when very sure",
    "76%",
    "pre-filled when very sure"
   ],
   [
    "Made-up words, English",
    "49% (n 848): no better than marking all wrong",
    "63%",
    "never pre-filled"
   ],
   [
    "Quick sums right (within 3)",
    "59% (n 136)",
    "95%",
    "never pre-filled"
   ],
   [
    "Letters / words (non-readers)",
    "21–71%",
    "60–90%",
    "never pre-filled"
   ],
   [
    "Which words were wrong",
    "precision 0.22 Urdu, 0.06 English",
    "—",
    "never pre-ticked"
   ]
  ],
  "not_real": "Story counts match the enumerator as often as a second person re-listening does, or better. The coach's check therefore arrives mostly empty: 1.6 fields filled and 10.7 to fill per child, about 2 minutes. Not measurable on the May recordings: Urdu first sounds and made-up words, and numbers read aloud. Two scoring bugs found on the way (real readers sent to the non-reader fallback; the story minute cut short in 6.5% of notes) are being fixed."
 }
};
