import { useParams, Link } from "react-router-dom";
import { getCompanyByName, companiesData } from "@/data";
import { ArrowLeft, Calendar, Building2, ArrowUpRight } from "lucide-react";
import { useSpring, animated, useSprings } from "@react-spring/web";
import { useEffect, useRef, useState, useMemo } from "react";
import CompanyLogo from "@/components/CompanyLogo";
import "../stars.scss";

const shell =
  "w-full px-4 sm:px-6 md:px-12 lg:px-[225px] py-10 sm:py-14 lg:py-16 relative z-10";

const cardClass =
  "rounded-xl border border-[#3d6b5c] bg-[#1a4039] p-5 sm:p-6";

const tagClass =
  "text-sm text-[#e8dcc8] bg-[#234a42] border border-[#3d6b5c] px-3 py-1.5 rounded-lg font-light";

function CardLabel({ children }: { children: string }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.18em] text-[#8fb8b0] font-medium mb-4">
      {children}
    </p>
  );
}

function CompanyPage() {
  const { name } = useParams();
  const company = name ? getCompanyByName(name) : undefined;
  const prefix = "/antonije/";

  const hasProjects = Boolean(company?.projects?.length);
  const hasKeyWork = Boolean(
    company && !hasProjects && company.responsibilities?.length
  );

  const mainSectionCount = useMemo(
    () => 3 + (hasProjects || hasKeyWork ? 1 : 0),
    [hasProjects, hasKeyWork]
  );

  const pageRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const [heroSpring, heroApi] = useSpring(() => ({
    from: { opacity: 0, transform: "translateY(12px)" },
    config: { tension: 90, friction: 26 },
  }));

  const [mainSprings, mainApi] = useSprings(mainSectionCount, () => ({
    from: { opacity: 0, transform: "translateY(16px)" },
    config: { tension: 90, friction: 26 },
  }));

  const [sidebarSpring, sidebarApi] = useSpring(() => ({
    from: { opacity: 0, transform: "translateY(16px)" },
    config: { tension: 90, friction: 26 },
  }));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setVisible(false);
    heroApi.set({ opacity: 0, transform: "translateY(12px)" });
    sidebarApi.set({ opacity: 0, transform: "translateY(16px)" });
    mainApi.start(() => ({
      opacity: 0,
      transform: "translateY(16px)",
      immediate: true,
    }));
  }, [name, heroApi, sidebarApi, mainApi, mainSectionCount]);

  useEffect(() => {
    if (!company) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
          heroApi.start({ to: { opacity: 1, transform: "translateY(0)" } });
          sidebarApi.start({
            to: { opacity: 1, transform: "translateY(0)" },
            delay: 60,
          });
          mainApi.start((i) => ({
            to: { opacity: 1, transform: "translateY(0)" },
            delay: 100 + i * 60,
          }));
        }
      },
      { threshold: 0.04 }
    );

    if (pageRef.current) observer.observe(pageRef.current);
    return () => observer.disconnect();
  }, [visible, heroApi, sidebarApi, mainApi, company, name]);

  if (!company) {
    return (
      <div className={`${shell} min-h-screen bg-[#16423c]`}>
        <p className="text-white text-xl font-medium mb-2">Not found</p>
        <p className="text-[#9ebdb7] font-light mb-8">This role does not exist.</p>
        <Link
          to={prefix}
          className="inline-flex items-center gap-2 text-sm text-[#8fb8b0] hover:text-[#c9a87c] no-underline transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </div>
    );
  }

  const otherRoles = companiesData.filter((c) => c.id !== company.id).slice(0, 4);

  let idx = 0;
  const metaCardsIdx = idx++;
  const descriptionIdx = idx++;
  const workIdx = hasProjects || hasKeyWork ? idx++ : -1;
  const fullTechIdx = idx++;

  return (
    <div className="min-h-screen bg-[#16423c] relative overflow-hidden">
      <div className="stars stars--hero opacity-50" aria-hidden="true">
        {[...Array(14)].map((_, i) => (
          <div className="star" key={i} />
        ))}
      </div>

      <div ref={pageRef} className={shell}>
        <Link
          to={prefix}
          className="inline-flex items-center gap-2 text-sm text-[#8fb8b0] hover:text-white no-underline transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back
        </Link>

        <animated.div style={heroSpring} className="mt-8 sm:mt-10 max-w-6xl">
          <h1 className="text-2xl sm:text-3xl lg:text-[2rem] text-white font-semibold leading-tight tracking-tight uppercase">
            {company.position}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#9ebdb7] font-light">
            <CompanyLogo
              logo={company.logo}
              logoInitial={company.logoInitial}
              name={company.name}
              accentColor={company.colorScheme.accent}
              size="xs"
            />
            <span className="text-[#dce9e6] font-medium">{company.name}</span>
            <span className="text-[#3d6b5c]" aria-hidden>
              ?
            </span>
            <span>{company.period}</span>
            {company.client && (
              <>
                <span className="text-[#3d6b5c]" aria-hidden>
                  ?
                </span>
                <span>{company.client}</span>
              </>
            )}
          </div>
        </animated.div>

        <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-8 lg:gap-10 max-w-6xl items-start">
          <div className="space-y-5 sm:space-y-6 min-w-0">
            <animated.div
              style={mainSprings[metaCardsIdx]}
              className="grid sm:grid-cols-2 gap-5 sm:gap-6"
            >
              <div className={cardClass}>
                <CardLabel>Role details</CardLabel>
                <div className="space-y-5">
                  <div className="flex gap-3">
                    <Calendar className="h-4 w-4 text-[#c9a87c] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-[#8fb8b0] mb-1">Period</p>
                      <p className="text-sm text-white font-light">
                        {company.period}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Building2 className="h-4 w-4 text-[#c9a87c] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-[#8fb8b0] mb-1">
                        {company.client ? "Client" : "Company"}
                      </p>
                      <p className="text-sm text-white font-light">
                        {company.client ?? company.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cardClass}>
                <CardLabel>Tech stack</CardLabel>
                <ul className="flex flex-wrap gap-2">
                  {company.technologies.slice(0, 8).map((tech) => (
                    <li key={tech} className={tagClass}>
                      {tech}
                    </li>
                  ))}
                  {company.technologies.length > 8 && (
                    <li className="text-sm text-[#8fb8b0] font-light px-1 py-1.5">
                      +{company.technologies.length - 8} more
                    </li>
                  )}
                </ul>
              </div>
            </animated.div>

            <animated.section
              style={mainSprings[descriptionIdx]}
              className={cardClass}
            >
              <CardLabel>
                {hasProjects ? "Role overview" : "What I did"}
              </CardLabel>
              <p className="text-base text-[#b8d4cf] font-light leading-[1.75]">
                {company.description}
              </p>
            </animated.section>

            {hasProjects && company.projects && (
              <animated.section
                style={mainSprings[workIdx]}
                className={cardClass}
              >
                <CardLabel>Projects</CardLabel>
                <ul className="list-none m-0 p-0 space-y-8">
                  {company.projects.map((project, index) => (
                    <li
                      key={project.name}
                      className={
                        index < company.projects!.length - 1
                          ? "pb-8 border-b border-[#3d6b5c]"
                          : ""
                      }
                    >
                      <h3 className="text-lg text-white font-medium mb-3">
                        {project.name}
                      </h3>
                      <p className="text-[#9ebdb7] font-light leading-[1.75] mb-4">
                        {project.description}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <li key={t} className={tagClass}>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </animated.section>
            )}

            {hasKeyWork && company.responsibilities && (
              <animated.section
                style={mainSprings[workIdx]}
                className={cardClass}
              >
                <CardLabel>Key work</CardLabel>
                <ul className="list-none m-0 p-0 space-y-3">
                  {company.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[#b8d4cf] font-light leading-[1.75] text-[15px]"
                    >
                      <span
                        className="shrink-0 mt-2.5 h-1 w-1 rounded-full bg-[#c9a87c]"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </animated.section>
            )}

            <animated.section
              style={mainSprings[fullTechIdx]}
              className={cardClass}
            >
              <CardLabel>Full technology</CardLabel>
              <ul className="flex flex-wrap gap-2">
                {company.technologies.map((tech) => (
                  <li key={tech} className={tagClass}>
                    {tech}
                  </li>
                ))}
              </ul>
            </animated.section>
          </div>

          <aside className="lg:sticky lg:top-20 space-y-5">
            <animated.div style={sidebarSpring} className={cardClass}>
              <CardLabel>About the company</CardLabel>
              <div className="flex items-center gap-3 mb-4">
                <CompanyLogo
                  logo={company.logo}
                  logoInitial={company.logoInitial}
                  name={company.name}
                  accentColor={company.colorScheme.accent}
                  size="lg"
                  className="rounded-lg"
                />
                <div className="min-w-0">
                  <p className="text-white font-medium leading-snug">
                    {company.name}
                  </p>
                  <p className="text-xs text-[#c9a87c] mt-1 tracking-wide">
                    {company.period}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#9ebdb7] font-light leading-relaxed mb-5">
                {company.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {company.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-[#e8dcc8] bg-[#234a42]/80 border border-[#3d6b5c] px-2.5 py-1 rounded-md font-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </animated.div>

            <animated.div style={sidebarSpring} className={cardClass}>
              <div className="flex items-center justify-between gap-2 mb-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#8fb8b0] font-medium">
                  More roles
                </p>
                <Link
                  to={prefix}
                  className="text-xs text-[#8fb8b0] hover:text-[#c9a87c] no-underline transition-colors shrink-0"
                >
                  View all
                </Link>
              </div>
              <ul className="list-none m-0 p-0 space-y-4">
                {otherRoles.map((role) => (
                  <li key={role.id}>
                    <Link
                      to={`${prefix}company/${role.id}`}
                      className="group flex items-start gap-3 no-underline"
                    >
                      <CompanyLogo
                        logo={role.logo}
                        logoInitial={role.logoInitial}
                        name={role.name}
                        accentColor={role.colorScheme.accent}
                        size="sm"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-white font-medium group-hover:text-[#c9a87c] transition-colors leading-snug">
                          {role.name}
                        </p>
                        <p className="text-xs text-[#8fa89f] font-light mt-0.5 line-clamp-1">
                          {role.position}
                        </p>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#3d6b5c] group-hover:text-[#c9a87c] shrink-0 mt-1 transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </animated.div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default CompanyPage;


