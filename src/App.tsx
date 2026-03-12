import React from 'react';

export default function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-church-blue text-white sticky top-0 z-50 shadow-md">
        <nav className="container mx-auto px-4 py-3 md:py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex items-center space-x-3 w-full md:w-auto justify-center md:justify-start">
            <img
              alt="Logo Paróquia"
              className="h-12 w-12 md:h-10 md:w-10 rounded-full"
              src="/brasao.png"
            />
            <div className="text-center md:text-left">
              <h1 className="font-bold text-sm md:text-base leading-tight">Paróquia Nossa Senhora de Fátima</h1>
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-300">Genibaú</p>
            </div>
          </div>
          <ul className="flex flex-wrap justify-center md:justify-end gap-3 md:space-x-6 text-[10px] md:text-xs font-medium uppercase tracking-wide w-full md:w-auto">
            <li><a className="hover:text-church-gold transition" href="#">Início</a></li>
            <li><a className="hover:text-church-gold transition" href="#">Pastoral</a></li>
            <li><a className="hover:text-church-gold transition" href="#">Informações</a></li>
            <li><a className="hover:text-church-gold transition" href="#">Galeria</a></li>
            <li><a className="hover:text-church-gold transition" href="#">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-bg text-white py-12 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">Sacramento do <br className="hidden md:block"/>Matrimônio</h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 max-w-xl mx-auto md:mx-0">O primeiro passo na vida cristã em família, onde o amor se torna sacramento eterno.</p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a className="bg-church-gold hover:bg-church-gold-light text-church-blue font-bold py-3 px-6 rounded transition w-full sm:w-auto text-center" href="#inscricao">Saiba Mais</a>
                <a className="border border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded transition w-full sm:w-auto text-center" href="#inscricao">Inscrever-se</a>
              </div>
            </div>
            <div className="w-full md:w-2/5 flex justify-center">
              <img
                alt="Brasão da Paróquia"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
                src="/brasao.png"
              />
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Pastoral Familiar */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-church-blue mb-2">Pastoral Familiar</h2>
                <h3 className="text-lg md:text-xl font-semibold text-church-gold mb-6 uppercase tracking-wide">Iniciação à vida conjugal</h3>
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                  A Pastoral Familiar da nossa paróquia tem como missão acompanhar os casais no processo de preparação para o sacramento do Matrimônio.
                </p>
                <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
                  Nossa equipe está preparada para orientar noivos, oferecendo formação adequada e acolhimento fraterno neste momento tão especial de suas vidas.
                </p>
                <div className="space-y-4 text-left inline-block md:block">
                  <div className="flex items-center text-sm md:text-base text-church-blue font-medium">
                    <span className="material-symbols-outlined text-church-gold mr-3 flex-shrink-0">volunteer_activism</span>
                    Acompanhamento pastoral personalizado
                  </div>
                  <div className="flex items-center text-sm md:text-base text-church-blue font-medium">
                    <span className="material-symbols-outlined text-church-gold mr-3 flex-shrink-0">favorite</span>
                    Formação para a vida a dois
                  </div>
                  <div className="flex items-center text-sm md:text-base text-church-blue font-medium">
                    <span className="material-symbols-outlined text-church-gold mr-3 flex-shrink-0">groups</span>
                    Integração à comunidade paroquial
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                <img
                  alt="Logo Pastoral Familiar"
                  className="w-full max-w-md object-contain drop-shadow-xl"
                  src="/pastoral-familiar.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Step Section */}
        <section className="py-16 md:py-20 bg-church-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-church-blue mb-10 md:mb-16">Como se Preparar para o Matrimônio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white p-8 md:p-10 rounded shadow-sm text-left flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-12 h-12 bg-church-blue text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 md:mb-6">1</div>
                <h4 className="text-lg md:text-xl font-bold text-church-blue mb-3 md:mb-4">Inscrição</h4>
                <p className="text-sm md:text-base text-gray-600">Procure a secretaria paroquial para fazer a inscrição e receber as orientações sobre documentação necessária.</p>
              </div>
              <div className="bg-white p-8 md:p-10 rounded shadow-sm text-left flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-12 h-12 bg-church-blue text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 md:mb-6">2</div>
                <h4 className="text-lg md:text-xl font-bold text-church-blue mb-3 md:mb-4">Formação</h4>
                <p className="text-sm md:text-base text-gray-600">Participe dos encontros de formação onde abordaremos temas essenciais para a vida conjugal cristã.</p>
              </div>
              <div className="bg-white p-8 md:p-10 rounded shadow-sm text-left flex flex-col items-center sm:items-start text-center sm:text-left sm:col-span-2 md:col-span-1">
                <div className="w-12 h-12 bg-church-blue text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 md:mb-6">3</div>
                <h4 className="text-lg md:text-xl font-bold text-church-blue mb-3 md:mb-4">Celebração</h4>
                <p className="text-sm md:text-base text-gray-600">Após a formação, o sacramento é agendado conforme disponibilidade da paróquia e do casal.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-church-blue mb-10 md:mb-16 text-center">Informações Importantes</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
              <div>
                <div className="mb-10 md:mb-12">
                  <h4 className="text-lg md:text-xl font-bold text-church-blue mb-6 text-center md:text-left">Informações Gerais</h4>
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
                      <span className="material-symbols-outlined text-church-gold text-2xl sm:text-base">calendar_month</span>
                      <div>
                        <p className="font-bold text-church-blue">Formações</p>
                        <p className="text-sm text-gray-600">Conforme calendário da Pastoral Familiar. Geralmente aos domingos no salão paroquial.</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
                      <span className="material-symbols-outlined text-church-gold text-2xl sm:text-base">church</span>
                      <div>
                        <p className="font-bold text-church-blue">Celebrações</p>
                        <p className="text-sm text-gray-600">Horários a combinar na secretaria paroquial.</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
                      <span className="material-symbols-outlined text-church-gold text-2xl sm:text-base">location_on</span>
                      <div>
                        <p className="font-bold text-church-blue">Local</p>
                        <p className="text-sm text-gray-600">Paróquia Nossa Senhora de Fátima - Genibaú<br />Rua José Mendonça, 410 - Fortaleza/CE</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-church-blue mb-6 text-center md:text-left">Encontros Obrigatórios</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="border border-gray-100 p-4 text-center rounded shadow-sm sm:shadow-none">
                      <p className="text-lg font-bold text-church-blue">15 de abr.</p>
                      <p className="text-[10px] text-gray-400 mb-2">Domingo - 08:00h</p>
                      <p className="text-[10px] font-bold uppercase tracking-tighter bg-gray-50 py-1">FORMAÇÃO I</p>
                    </div>
                    <div className="border border-gray-100 p-4 text-center rounded shadow-sm sm:shadow-none">
                      <p className="text-lg font-bold text-church-blue">22 de abr.</p>
                      <p className="text-[10px] text-gray-400 mb-2">Domingo - 08:00h</p>
                      <p className="text-[10px] font-bold uppercase tracking-tighter bg-gray-50 py-1">FORMAÇÃO II</p>
                    </div>
                    <div className="border border-gray-100 p-4 text-center rounded shadow-sm sm:shadow-none">
                      <p className="text-lg font-bold text-church-blue">29 de abr.</p>
                      <p className="text-[10px] text-gray-400 mb-2">Domingo - 07:00h</p>
                      <p className="text-[10px] font-bold uppercase tracking-tighter bg-gray-50 py-1">MISSA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-church-cream p-6 md:p-8 rounded mb-10 md:mb-12 border-l-4 border-church-gold">
                  <h4 className="text-lg md:text-xl font-bold text-church-blue mb-6">Documentos Necessários</h4>
                  <ul className="space-y-4 text-sm text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-church-gold text-base flex-shrink-0">description</span>
                      <span>RG e CPF dos noivos (original e cópia)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-church-gold text-base flex-shrink-0">description</span>
                      <span>Comprovante de residência atualizado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-church-gold text-base flex-shrink-0">description</span>
                      <span>Certidão de Batismo para fins matrimoniais</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-church-gold text-base flex-shrink-0">description</span>
                      <span>Certificado do Encontro de Noivos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-church-gold text-base flex-shrink-0">description</span>
                      <span>Taxa de expediente da secretaria</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-church-blue mb-6 text-center md:text-left">Próximos Encontros</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-church-blue text-white p-6 rounded text-center">
                      <p className="text-2xl font-bold text-church-gold">15 de mai.</p>
                      <p className="text-xs mb-4">08:00h</p>
                      <p className="text-xs font-medium border-t border-white/20 pt-3">Equipe Pastoral</p>
                    </div>
                    <div className="bg-church-blue text-white p-6 rounded text-center">
                      <p className="text-2xl font-bold text-church-gold">12 de jun.</p>
                      <p className="text-xs mb-4">08:00h</p>
                      <p className="text-xs font-medium border-t border-white/20 pt-3">Equipe Pastoral</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-church-blue mb-4 text-center">Galeria de Fotos</h2>
            <p className="text-center text-church-blue font-semibold mb-12">Encontros de Noivos</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <a href="https://lh3.googleusercontent.com/aida-public/AB6AXuCteN9XdeNLKtkBUXjYX7354WkQNrj7PPYS4QrRM8OR1Jm-DkOC5ciXyhzqEV4-sV_HlWtM7ck-cbfxwEfJwtr-AeHGx6Y-ZSyNOEI_DR1tUJxBg4TvBZ5AWdN9N5UzbdXGj1Ls5NQS1Q5QMF8CLY8lNwhNbT9msdot6cYioVebNUkFzk31D103U8dcQfI1d0N_aTYSE93MdzK6tHGYa8ImdD2OF4pF-LtS7Lo-76AvNsUpMoEk-0dKlr3vhG6acYsn5wb1ImJmZVs" target="_blank" rel="noreferrer" className="block overflow-hidden rounded shadow-sm">
                <img alt="Galeria 1" className="w-full h-48 object-cover hover:scale-105 transition duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCteN9XdeNLKtkBUXjYX7354WkQNrj7PPYS4QrRM8OR1Jm-DkOC5ciXyhzqEV4-sV_HlWtM7ck-cbfxwEfJwtr-AeHGx6Y-ZSyNOEI_DR1tUJxBg4TvBZ5AWdN9N5UzbdXGj1Ls5NQS1Q5QMF8CLY8lNwhNbT9msdot6cYioVebNUkFzk31D103U8dcQfI1d0N_aTYSE93MdzK6tHGYa8ImdD2OF4pF-LtS7Lo-76AvNsUpMoEk-0dKlr3vhG6acYsn5wb1ImJmZVs" />
              </a>
              <a href="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Ivv6hPQiAmCmpCVdXb2iwPOpVipVAyk0th0Nkdzm6nx-gcqSSLuEam5bqzzLXw7Ld2Z7O_6EHHxz_Do30JgLFbT4icrx1ImMdcXr7GNI_0uS_GkYJj5oVMgV-OTP8UhHXDiMyVtu0GPv79fQYQGRr0zY7hYgXFRTHzzUXePo4WOd8hTb8MKUxaRF6Pbz0-jSniLRpA350kISpBmdO7FkAXlD1diN6b-bQwLhBo50QOk8QL2QpJ7cm-5AuVv2UB0d_u5y_2pKSrI" target="_blank" rel="noreferrer" className="block overflow-hidden rounded shadow-sm">
                <img alt="Galeria 2" className="w-full h-48 object-cover hover:scale-105 transition duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Ivv6hPQiAmCmpCVdXb2iwPOpVipVAyk0th0Nkdzm6nx-gcqSSLuEam5bqzzLXw7Ld2Z7O_6EHHxz_Do30JgLFbT4icrx1ImMdcXr7GNI_0uS_GkYJj5oVMgV-OTP8UhHXDiMyVtu0GPv79fQYQGRr0zY7hYgXFRTHzzUXePo4WOd8hTb8MKUxaRF6Pbz0-jSniLRpA350kISpBmdO7FkAXlD1diN6b-bQwLhBo50QOk8QL2QpJ7cm-5AuVv2UB0d_u5y_2pKSrI" />
              </a>
              <a href="https://lh3.googleusercontent.com/aida-public/AB6AXuBZJh7ro77mVifeokn2ZQUwSFTvLdKpcHmFbN2FtclyrumHHpFvFK7Pm80G7tBFJD8hPCypMg1cHN2w2O9XM2yGwGXXAq_y3kszMAelGpQbb8aX5yZiBepbL10b2BTVSFrFsFOiD5WDW4y3zzEczVO2tkFLzlW53kdR5pzqo1vghyt8Kv9XaIJWRASHQw9wr13hfiSgzycXpslZcMV6ss05CYWOxS_7wksCSUllCSg0S-xQfSOkoBsvavKXgiqgbPG0sIpFAtQbgn0" target="_blank" rel="noreferrer" className="block overflow-hidden rounded shadow-sm">
                <img alt="Galeria 3" className="w-full h-48 object-cover hover:scale-105 transition duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZJh7ro77mVifeokn2ZQUwSFTvLdKpcHmFbN2FtclyrumHHpFvFK7Pm80G7tBFJD8hPCypMg1cHN2w2O9XM2yGwGXXAq_y3kszMAelGpQbb8aX5yZiBepbL10b2BTVSFrFsFOiD5WDW4y3zzEczVO2tkFLzlW53kdR5pzqo1vghyt8Kv9XaIJWRASHQw9wr13hfiSgzycXpslZcMV6ss05CYWOxS_7wksCSUllCSg0S-xQfSOkoBsvavKXgiqgbPG0sIpFAtQbgn0" />
              </a>
              <a href="https://lh3.googleusercontent.com/aida-public/AB6AXuByyeXuAPDRlg0CO56N_Bd1ivbc3xf58k0ZTLFX7q-MjGV00TKLLRqFYDHj6850pB9QCSkKkjo5JeAFE65mw9_tJPDizdYPXU3EEgfj41jacYheWx0gNEA6npTsDdMrsHHaaJe-TtK_rLwpy543hxHnyhWxW0AjUQQbSvGpA4k-orW_jf7q-Q1KtKlC5fzrfpdrIhpFZWarcSRLE8GlXVtkznFDVohQk2YYLy4JycqKfDBks0emaYlrOBrza6cefymbrVKZ35C1AIs" target="_blank" rel="noreferrer" className="block overflow-hidden rounded shadow-sm">
                <img alt="Galeria 4" className="w-full h-48 object-cover hover:scale-105 transition duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByyeXuAPDRlg0CO56N_Bd1ivbc3xf58k0ZTLFX7q-MjGV00TKLLRqFYDHj6850pB9QCSkKkjo5JeAFE65mw9_tJPDizdYPXU3EEgfj41jacYheWx0gNEA6npTsDdMrsHHaaJe-TtK_rLwpy543hxHnyhWxW0AjUQQbSvGpA4k-orW_jf7q-Q1KtKlC5fzrfpdrIhpFZWarcSRLE8GlXVtkznFDVohQk2YYLy4JycqKfDBks0emaYlrOBrza6cefymbrVKZ35C1AIs" />
              </a>
            </div>
            <p className="text-center text-church-blue font-semibold mb-12">Momentos de Oração</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="https://lh3.googleusercontent.com/aida-public/AB6AXuDevN_ASZAf9C9M46CiDt7srV0ffhwZsJ_pbCbRRJOXyqgimasJNAzJQkuB9cRaHkuqPvOtfXalOeNeKsS0UxFCuBEdRpHyEECQAiyFOG6_s122LNkNoz-X0D-JNEQj8-lN_QM9WFGDgZXXcvoxgsu286s5U6FGhmbTF5ua2S_tg2EVNDBjpRGhBYX7P64QcCLiUI0SqfuSd9QRWl_GiI_rYTej1CPfGcYLDD0aAYTeGzX571H6Q_XiI-aju3K6ZLFvnhBurgAHz4g" target="_blank" rel="noreferrer" className="block overflow-hidden rounded shadow-sm">
                <img alt="Galeria 5" className="w-full h-48 object-cover hover:scale-105 transition duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDevN_ASZAf9C9M46CiDt7srV0ffhwZsJ_pbCbRRJOXyqgimasJNAzJQkuB9cRaHkuqPvOtfXalOeNeKsS0UxFCuBEdRpHyEECQAiyFOG6_s122LNkNoz-X0D-JNEQj8-lN_QM9WFGDgZXXcvoxgsu286s5U6FGhmbTF5ua2S_tg2EVNDBjpRGhBYX7P64QcCLiUI0SqfuSd9QRWl_GiI_rYTej1CPfGcYLDD0aAYTeGzX571H6Q_XiI-aju3K6ZLFvnhBurgAHz4g" />
              </a>
              <a href="https://lh3.googleusercontent.com/aida-public/AB6AXuCIwRmb0uNm6X0NRXOaNwtXELK3AB-wGCZMr8M0S0-oMUt4QBnC0kNmm6UgwOTZgb3iZTFgZYSt7Cr_o36BQT6UV5jcPptOx7p1VIcGiWdL_fkvQXjb-pidp_n71j0HsGcjt98G7lPsnKMjXExjxmSetno3ZeGlKuoOJHZF0HrnTCV6Mt856r5msNBqFTgy_cHzG63k1rTJxl8j0ixuVm0cI9M1CteX0X6ONLHqjeY-tWMJBKK1OpFmD1Ocm2r_oG1-TZcn8yRgZYw" target="_blank" rel="noreferrer" className="block overflow-hidden rounded shadow-sm">
                <img alt="Galeria 6" className="w-full h-48 object-cover hover:scale-105 transition duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIwRmb0uNm6X0NRXOaNwtXELK3AB-wGCZMr8M0S0-oMUt4QBnC0kNmm6UgwOTZgb3iZTFgZYSt7Cr_o36BQT6UV5jcPptOx7p1VIcGiWdL_fkvQXjb-pidp_n71j0HsGcjt98G7lPsnKMjXExjxmSetno3ZeGlKuoOJHZF0HrnTCV6Mt856r5msNBqFTgy_cHzG63k1rTJxl8j0ixuVm0cI9M1CteX0X6ONLHqjeY-tWMJBKK1OpFmD1Ocm2r_oG1-TZcn8yRgZYw" />
              </a>
              <a href="https://lh3.googleusercontent.com/aida-public/AB6AXuA-pLtQLUO2V1L8gGGTOHooKLGO90F-2rDqaeu8vua8frXHLuoIJqW8cpJ3jJhwQ0BdJ2tQFR8r5epkH1y_5aNWTG4DdstQy_kR8wZnSGlKxwXJie-aKIYeZkYagu9GfMWPg3a0DOb_c0uzMoCMUNcWbQws6eXW6AunLzdrlsC8VR8TO05uHvEN41Gm7WrQzDpkZfvYrTyUDRZ9ymGhZXcYcXvzOWD0JrwuLHIT2Bhh96OEKnN-zrIF2eX7ixAgkaNn0KsqclqedUs" target="_blank" rel="noreferrer" className="block overflow-hidden rounded shadow-sm">
                <img alt="Galeria 7" className="w-full h-48 object-cover hover:scale-105 transition duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-pLtQLUO2V1L8gGGTOHooKLGO90F-2rDqaeu8vua8frXHLuoIJqW8cpJ3jJhwQ0BdJ2tQFR8r5epkH1y_5aNWTG4DdstQy_kR8wZnSGlKxwXJie-aKIYeZkYagu9GfMWPg3a0DOb_c0uzMoCMUNcWbQws6eXW6AunLzdrlsC8VR8TO05uHvEN41Gm7WrQzDpkZfvYrTyUDRZ9ymGhZXcYcXvzOWD0JrwuLHIT2Bhh96OEKnN-zrIF2eX7ixAgkaNn0KsqclqedUs" />
              </a>
              <a href="https://lh3.googleusercontent.com/aida-public/AB6AXuAYQcGTgmEG2aNIuxdxQfZhtU6-DKMMPo73Tghy059yCZpt9EL7Lh2HGfEeQcLmhH5guxAmXkE4wUQ4T-IoCsnLAH_29-GdHvM0Nv2AyOa5Nei8jKkTVJB9Uaai9cUnU1TrfYyPpU_W4Mxvwlw39h4bLfZtLWMvs8Slg2pgLvSksgv5mk7fIGdB1FnbAOkocM_mCp-EqU-7oNL-SaoTp5bKzGYOex5uz6T4RqIGmn5smqFkvlF0b9UtLEVSdIic1W-vt-wAZLUbg90" target="_blank" rel="noreferrer" className="block overflow-hidden rounded shadow-sm">
                <img alt="Galeria 8" className="w-full h-48 object-cover hover:scale-105 transition duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYQcGTgmEG2aNIuxdxQfZhtU6-DKMMPo73Tghy059yCZpt9EL7Lh2HGfEeQcLmhH5guxAmXkE4wUQ4T-IoCsnLAH_29-GdHvM0Nv2AyOa5Nei8jKkTVJB9Uaai9cUnU1TrfYyPpU_W4Mxvwlw39h4bLfZtLWMvs8Slg2pgLvSksgv5mk7fIGdB1FnbAOkocM_mCp-EqU-7oNL-SaoTp5bKzGYOex5uz6T4RqIGmn5smqFkvlF0b9UtLEVSdIic1W-vt-wAZLUbg90" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-20 bg-church-blue text-white" id="inscricao">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Entre em Contato</h2>
                <p className="text-sm md:text-base text-gray-300 mb-8 md:mb-10">Estamos aqui para ajudar você nesta jornada de fé e amor rumo ao altar.</p>
                <div className="space-y-4 md:space-y-6 text-left inline-block md:block">
                  <div className="flex items-start gap-3 md:gap-4">
                    <span className="material-symbols-outlined text-church-gold flex-shrink-0">location_on</span>
                    <p className="text-xs md:text-sm">Rua José Mendonça, 410 - Parque Genibaú, Fortaleza/CE - CEP: 60534-090</p>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="material-symbols-outlined text-church-gold flex-shrink-0">phone</span>
                    <p className="text-xs md:text-sm">(85) 99127-2171</p>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="material-symbols-outlined text-church-gold flex-shrink-0">mail</span>
                    <p className="text-xs md:text-sm break-all">paroquiansdefatimagenibau@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="material-symbols-outlined text-church-gold flex-shrink-0">schedule</span>
                    <p className="text-xs md:text-sm">Seg-Sex: 08h às 12h e 14h às 17h</p>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start gap-4 mt-8 md:mt-10">
                  <a className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-church-gold transition" href="#">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                  </a>
                  <a className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-church-gold transition" href="#">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 md:p-10 rounded shadow-2xl text-gray-800">
                <h3 className="text-xl md:text-2xl font-bold text-church-blue mb-6 md:mb-8 text-center md:text-left">Administração Paroquial</h3>
                <div className="space-y-4 md:space-y-6 text-xs md:text-sm">
                  <div>
                    <p className="flex items-center text-church-blue font-bold gap-2">
                      <span className="material-symbols-outlined text-church-gold text-base md:text-lg">church</span>
                      Pároco:
                    </p>
                    <p className="text-gray-600 pl-6 md:pl-7">Pe. Francisco Aderlane Freitas Carneiro</p>
                  </div>
                  <div>
                    <p className="flex items-center text-church-blue font-bold gap-2">
                      <span className="material-symbols-outlined text-church-gold text-base md:text-lg">groups</span>
                      Diáconos:
                    </p>
                    <p className="text-gray-600 pl-6 md:pl-7">Diác. permanente José Elinésio Coelho de Sousa</p>
                    <p className="text-gray-600 pl-6 md:pl-7">Diác. permanente Antonio Jairton de Goes Braga</p>
                  </div>
                  <div>
                    <p className="flex items-center text-church-blue font-bold gap-2">
                      <span className="material-symbols-outlined text-church-gold text-base md:text-lg">assignment_ind</span>
                      Secretárias(os):
                    </p>
                    <p className="text-gray-600 pl-6 md:pl-7">Francisco George Duarte Gomes</p>
                    <p className="text-gray-600 pl-6 md:pl-7">Mariana Marques Aguiar</p>
                  </div>
                  <div>
                    <p className="flex items-center text-church-blue font-bold gap-2">
                      <span className="material-symbols-outlined text-church-gold text-base md:text-lg">person</span>
                      Coordenadores da Pastoral Familiar:
                    </p>
                    <p className="text-gray-600 pl-6 md:pl-7">Casal Coordenador</p>
                    <p className="text-gray-400 text-[10px] md:text-xs italic pl-6 md:pl-7">Entre em contato para mais informações</p>
                  </div>
                </div>
                <a className="mt-10 inline-flex items-center justify-center bg-church-gold hover:bg-church-gold-light text-church-blue font-bold py-4 px-6 rounded w-full transition" href="https://wa.me/5585991272171">
                  <span className="material-symbols-outlined mr-2">chat</span>
                  Entrar em Contato via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-church-blue text-white py-8 md:py-10 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2 mb-4">
            <img
              alt="Logo Paróquia"
              className="h-8 w-8 sm:h-6 sm:w-6 rounded-full"
              src="/brasao.png"
            />
            <span className="font-bold text-xs sm:text-sm tracking-wide">Paróquia Nossa Senhora de Fátima - Genibaú</span>
          </div>
          <p className="text-[10px] sm:text-xs text-gray-500">© {new Date().getFullYear()} Paróquia Nossa Senhora de Fátima - Genibaú. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
