import { Navbar } from "@/components/custom/navbar";
import { Footer } from "@/components/custom/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Users,
  Search,
  MessageSquare,
  Star,
  BookOpen,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Award,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                Plataforma de Recrutamento Inteligente
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Conecte-se com as{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  melhores oportunidades
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                O ENGAGEI é a plataforma que conecta candidatos talentosos com empresas inovadoras. 
                Encontre sua próxima oportunidade ou o profissional ideal para sua equipe.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-8 py-6"
                >
                  Começar Agora
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600"
                >
                  Sou Empresa
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Cadastro Gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Sem Taxas Ocultas</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Vagas em Destaque</h3>
                    <span className="text-sm text-blue-600 font-medium">Ver todas</span>
                  </div>
                  
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 truncate">
                          Desenvolvedor Full Stack
                        </h4>
                        <p className="text-sm text-gray-600">Empresa Tech • São Paulo</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">CLT</span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Remoto</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10k+", label: "Vagas Ativas" },
              { number: "50k+", label: "Candidatos" },
              { number: "5k+", label: "Empresas" },
              { number: "95%", label: "Satisfação" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funcionalidades Section */}
      <section id="funcionalidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ferramentas completas para candidatos, empresas e freelancers encontrarem o match perfeito
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Busca Inteligente",
                description: "Encontre vagas por localização, área de atuação e tipo de emprego com filtros avançados",
                color: "from-blue-600 to-indigo-600",
              },
              {
                icon: Users,
                title: "Perfis Personalizados",
                description: "Crie perfis completos como candidato, empresa ou freelancer com portfólio e experiências",
                color: "from-indigo-600 to-purple-600",
              },
              {
                icon: MessageSquare,
                title: "Chat Integrado",
                description: "Comunique-se diretamente com empresas e candidatos através do nosso sistema de mensagens",
                color: "from-purple-600 to-pink-600",
              },
              {
                icon: Star,
                title: "Avaliações",
                description: "Sistema de feedback transparente entre empresas e candidatos para construir reputação",
                color: "from-pink-600 to-red-600",
              },
              {
                icon: BookOpen,
                title: "Conteúdos Exclusivos",
                description: "Acesse dicas, artigos e guias sobre mercado de trabalho e desenvolvimento profissional",
                color: "from-red-600 to-orange-600",
              },
              {
                icon: TrendingUp,
                title: "Notificações Smart",
                description: "Receba alertas sobre vagas que combinam com seu perfil e mensagens importantes",
                color: "from-orange-600 to-yellow-600",
              },
            ].map((feature, i) => (
              <Card key={i} className="border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Como funciona o ENGAGEI?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simples, rápido e eficiente. Comece sua jornada em 3 passos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: Target,
                title: "Crie seu Perfil",
                description: "Cadastre-se gratuitamente e complete seu perfil com suas informações, experiências e habilidades",
              },
              {
                step: "02",
                icon: Search,
                title: "Busque ou Seja Encontrado",
                description: "Procure vagas ideais ou deixe que empresas encontrem você através do seu perfil completo",
              },
              {
                step: "03",
                icon: Award,
                title: "Conecte e Conquiste",
                description: "Converse com empresas, participe de processos seletivos e conquiste sua próxima oportunidade",
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-center space-y-6">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-600">{step.step}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para Empresas Section */}
      <section id="para-empresas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Soluções completas para sua empresa
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Encontre os melhores talentos, gerencie processos seletivos e construa equipes de alta performance com o ENGAGEI.
              </p>

              <div className="space-y-4">
                {[
                  "Publique vagas ilimitadas gratuitamente",
                  "Acesse banco de talentos qualificados",
                  "Gerencie candidaturas em um só lugar",
                  "Contrate freelancers para projetos específicos",
                  "Sistema de avaliação e feedback",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-blue-50">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
              >
                Cadastrar Empresa
              </Button>
            </div>

            <div className="relative">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <Shield className="w-12 h-12 text-blue-200" />
                    <div>
                      <h3 className="text-xl font-bold">Segurança e Confiança</h3>
                      <p className="text-blue-100">Verificação de perfis e empresas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Zap className="w-12 h-12 text-blue-200" />
                    <div>
                      <h3 className="text-xl font-bold">Processos Ágeis</h3>
                      <p className="text-blue-100">Contratação até 3x mais rápida</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <TrendingUp className="w-12 h-12 text-blue-200" />
                    <div>
                      <h3 className="text-xl font-bold">Resultados Comprovados</h3>
                      <p className="text-blue-100">95% de satisfação das empresas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Pronto para dar o próximo passo na sua carreira?
          </h2>
          <p className="text-xl text-gray-600">
            Junte-se a milhares de profissionais e empresas que já encontraram o match perfeito no ENGAGEI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-8 py-6"
            >
              Criar Conta Gratuita
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600"
            >
              Falar com Especialista
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            Sem cartão de crédito necessário • Cancele quando quiser
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
