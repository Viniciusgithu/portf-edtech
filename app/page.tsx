'use client'

import { FormEvent, useMemo, useState } from 'react'

const projects = [
  {
    category: 'recursos',
    tag: 'PLATAFORMA DIGITAL',
    title: 'PROJETO PRISMA',
    description:
      'Plataforma digital autoral para organização, apresentação e comercialização de materiais educativos digitais (e-books, resumos, infográficos, guias de estudo e templates.',
    featured: true,
    link: false,
  },
  {
    category: 'aulas',
    tag: 'ENSINO FUNDAMENTAL',
    title: 'AULAS DE HISTÓRIA & GEOGRAFIA (ESCOLA ARIANO SUASSUNA)',
    description:
      'Aplicação prática de metodologias ativas e teorias educacionais contemporâneas em sala de aula, promovendo o engajamento através de estudos de caso e projetos interdisciplinares.',
  },
  {
    category: 'eventos',
    tag: 'BOLSA DE ESTUDO',
    title: 'PIBID — EVENTOS CULTURAIS E ACOMPANHAMENTO PEDAGÓGICO (ESCOLA ANÍBAL FERNANDES)',
    description:
      'Criação de eventos culturais escolares e vivência pedagógica focada no estímulo ao pensamento histórico social dos estudantes de ensino médio.',
  },
]

const filters = [
  ['todos', 'TODOS'],
  ['aulas', 'AULAS & METODOLOGIAS ATIVAS'],
  ['recursos', 'RECURSOS DIGITAIS'],
  ['eventos', 'EVENTOS CULTURAIS'],
  ['formacao', 'FORMAÇÃO'],
]

export default function Page() {
  const [activeFilter, setActiveFilter] = useState('todos')
  const [submitted, setSubmitted] = useState(false)
  const visibleProjects = useMemo(
    () => activeFilter === 'todos' ? projects : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  )

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <main className="site-shell">
      <header className="hero" id="inicio">
        <section className="hero-inner">
          {/* <div className="status-chip"><span className="status-dot" /> STATUS: AVAILABLE FOR PEDAGOGICAL PROJECTS</div> */}
          <div className="hero-grid">
            <div className="hero-copy">
              {/* <p className="eyebrow">PORTFÓLIO / 2026</p> */}
              <h1>VINICIUS<br /></h1>
              <p className="subtitle">Licenciado em História<br/>com especialização em História do Nordeste<br/>e formação em Análise e Desenvolvimento de Sistemas.</p>
            </div>
            <div className="hero-index" aria-label="Índice do portfólio">
              <strong>01</strong>
              </div>
          </div>
          
          <div className="hero-actions">
            <a className="button button-primary" href="#contato">DOWNLOAD CURRÍCULO [PDF] <span>↘</span></a>
            {/* <a className="button button-secondary" href="#projetos">EXPLORAR PROJETO PRISMA <span>→</span></a> */}
          </div>


        </section>
      </header>

      {/* <nav className="filter-wrap" aria-label="Filtrar projetos">
        <div className="section-label">FILTRAR POR <span>//</span></div>
        <div className="filters">
          {filters.map(([value, label]) => (
            <button key={value} className={`filter ${activeFilter === value ? 'is-active' : ''}`} onClick={() => setActiveFilter(value)} aria-pressed={activeFilter === value}>[ {label} ]</button>
          ))}
        </div>
      </nav> */}
      <section className="content-section" id="projetos">
        <div className="section-heading">
          <p className="eyebrow">02 / CAMPO DE ATUAÇÃO</p>
          <h2>PROJETOS &<br /><span>EXPERIÊNCIAS</span></h2>
          </div>
        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.title} tabIndex={0}>
              <div className="card-meta"><span className="tag">[ {project.tag} ]</span><span className="card-number">0{index + 1}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link && <a className="text-link" href="#contato">Acessar Plataforma <span>→</span></a>}
            </article>
          ))}
        </div>
      </section>

      <section className="content-section education-section" id="formacao">
        <div className="education-column light-panel"><p className="eyebrow">03 / Educação</p><h2>FORMAÇÃO<br />ACADÊMICA</h2><div className="education-list"><div><b>01</b><p>Licenciatura Plena em História<strong>UNICAP</strong></p></div><div><b>02</b><p>Especialização em História do Nordeste<strong>UNICAP</strong></p></div><div><b>03</b><p>Análise e Desenvolvimento de Sistemas<strong>CESAR School</strong></p></div></div></div>
        <div className="education-column dark-panel"><p className="eyebrow">03 / Competências</p><h2>COMPETÊNCIAS<br /><span>& FERRAMENTAS</span></h2><p className="skills-copy">Metodologias Ativas de Ensino<br />Letramento Digital<br />Produção de Materiais Didáticos<br />História<br />Filosofia<br /></p>
        </div>
        
      </section>

      {/* <section className="contact-section" id="contato">
        <div className="contact-intro"><p className="eyebrow">04 / PRÓXIMO PASSO</p><h2>VAMOS<br /><span>CONSTRUIR?</span></h2><p>Tem uma escola, projeto ou ideia em educação? Vamos transformar escopo em experiência de aprendizagem.</p><div className="contact-aside">RECIFE, PE<br />BRASIL<br /><br />DISPONÍVEL<br />PARA COLABORAÇÕES</div></div>
        <form className="contact-form" onSubmit={handleSubmit}><h3>ENTRE EM CONTATO /<br />SOLICITAR PROPOSTA PEDAGÓGICA</h3><label>NOME COMPLETO<input required name="name" type="text" /></label><label>E-MAIL DE CONTATO<input required name="email" type="email" /></label><fieldset><legend>TIPO DE CONTATO</legend><label className="radio-label"><input defaultChecked name="type" type="radio" value="school" /> Escola / Instituição</label><label className="radio-label"><input name="type" type="radio" value="consulting" /> Projeto Consultivo</label><label className="radio-label"><input name="type" type="radio" value="digital" /> Parceria Digital</label></fieldset><label>MENSAGEM / ESCOPO DO PROJETO<textarea required name="message" rows={5} /></label><button className="button button-primary submit-button" type="submit">ENVIAR MENSAGEM <span>↗</span></button>{submitted && <p className="success-message" role="status">[ OK ] MENSAGEM REGISTRADA. RETORNAREI EM BREVE.</p>}</form>
      </section> */}

        <br/>
      <footer><span>VLP / 2026</span><a href="#inicio">VOLTAR AO TOPO ↑</a><span>EDUCAÇÃO • HISTÓRIA • GEOGRAFIA • FILOSOFIA • TECNOLOGIA</span></footer>
    </main>
  )
}
