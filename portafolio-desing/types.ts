export type Project = { id: string; slug: string; title: string; summary: string; technologies: string; featured?: boolean; github_url?: string; live_url?: string };
export type Skill = { id: string; name: string; category: string };
export type Experience = { id: string; role: string; company: string; location?: string; start_date: string; end_date?: string; is_current: boolean; description: string; technologies?: string };
export type Education = { id: string; degree: string; institution: string; start_year: string; end_year?: string; description?: string };
