import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    telegram: '',
    country: '',
    agreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
  };

  const platforms = [
    { name: 'Spotify', icon: 'Music', color: 'bg-green-500' },
    { name: 'Apple Music', icon: 'Music2', color: 'bg-gray-800' },
    { name: 'YouTube Music', icon: 'Play', color: 'bg-red-500' },
    { name: 'Deezer', icon: 'Music3', color: 'bg-purple-500' },
    { name: 'SoundCloud', icon: 'Volume2', color: 'bg-orange-500' },
    { name: 'Yandex Music', icon: 'Music4', color: 'bg-yellow-500' },
  ];

  const countries = [
    'Российская Федерация',
    'Соединённые Штаты Америки',
    'Европейская экономическая зона',
    'Индия',
    'Бразилия',
    'Китай',
    'Швейцария'
  ];

  const faqData = [
    {
      question: 'Когда запустится сервис?',
      answer: 'Полный запуск сервиса Item Music запланирован на сентябрь 2024 года. Сейчас вы можете оставить заявку и получить премиум подписку бесплатно.'
    },
    {
      question: 'На каких платформах будет доступна моя музыка?',
      answer: 'Ваша музыка будет размещена на всех основных стриминговых платформах: Spotify, Apple Music, YouTube Music, Deezer, SoundCloud, Yandex Music и многих других.'
    },
    {
      question: 'Сколько стоит премиум подписка?',
      answer: 'Для первых пользователей премиум подписка будет абсолютно бесплатной. Оставьте заявку сейчас и получите эксклюзивный доступ.'
    },
    {
      question: 'Как быстро моя музыка появится на платформах?',
      answer: 'Обычно процесс размещения занимает от 24 до 72 часов в зависимости от платформы. Мы обеспечиваем максимально быструю дистрибуцию.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral via-teal to-warm-yellow animate-gradient-shift bg-[size:400%_400%]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-coral/90 to-teal/90" />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="font-heading text-6xl md:text-7xl font-bold text-white mb-6">
              Item Music
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Опубликуйте свою музыку на всех платформах
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
              <p className="text-white text-lg mb-4">
                🚀 Заработает в <span className="font-bold">сентябре</span>
              </p>
              <p className="text-white/80">
                А пока вы можете оставить заявку и стать первым!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Application Form */}
        <Card className="max-w-2xl mx-auto mb-16 animate-scale-in shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="font-heading text-3xl text-deep-blue">
              Получите премиум подписку бесплатно
            </CardTitle>
            <CardDescription className="text-lg">
              Оставьте заявку и станьте одним из первых пользователей
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input
                  placeholder="Введите ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Ваш Telegram</label>
                <Input
                  placeholder="@username"
                  value={formData.telegram}
                  onChange={(e) => setFormData({...formData, telegram: e.target.value})}
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Выберите страну</label>
                <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Где работает наш сервис" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country, index) => (
                      <SelectItem key={index} value={country}>{country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreement"
                  checked={formData.agreed}
                  onCheckedChange={(checked) => setFormData({...formData, agreed: checked as boolean})}
                />
                <label htmlFor="agreement" className="text-sm text-gray-600">
                  Согласен на обработку персональных данных
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-lg font-medium bg-gradient-to-r from-coral to-teal hover:from-coral/90 hover:to-teal/90 transition-all duration-300"
                disabled={!formData.name || !formData.telegram || !formData.country || !formData.agreed}
              >
                Отправить заявку
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Platforms Section */}
        <section className="mb-16">
          <h2 className="font-heading text-4xl text-center text-deep-blue mb-12">
            Платформы для публикации
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={platform.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-medium text-lg">{platform.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-8">
              <h2 className="font-heading text-3xl text-deep-blue mb-6">
                Есть вопросы? Напишите в наш чат
              </h2>
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full h-12 text-lg border-2 border-coral text-coral hover:bg-coral hover:text-white transition-all duration-300"
                >
                  <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
                  Увидеть ваш Telegram
                </Button>
                <Button 
                  className="w-full h-12 text-lg bg-gradient-to-r from-coral to-teal hover:from-coral/90 hover:to-teal/90 transition-all duration-300"
                >
                  <Icon name="Phone" className="w-5 h-5 mr-2" />
                  Связаться со мной
                </Button>
                <p className="text-gray-600 text-sm">
                  Наш сотрудник свяжется с вами в течение двух дней и обсудит детали
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl text-center text-deep-blue mb-12">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Features Preview */}
        <section className="mt-16 text-center">
          <h2 className="font-heading text-4xl text-deep-blue mb-8">
            Что будет доступно в сентябре
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-coral to-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Upload" className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl mb-4">Быстрая публикация</h3>
                <p className="text-gray-600">Загружайте треки и публикуйте их на всех платформах одним кликом</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-teal to-warm-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BarChart3" className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl mb-4">Аналитика</h3>
                <p className="text-gray-600">Следите за статистикой прослушиваний и доходами в реальном времени</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-warm-yellow to-coral rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="DollarSign" className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl mb-4">Монетизация</h3>
                <p className="text-gray-600">Получайте выплаты со всех платформ в одном месте</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-deep-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-heading text-2xl mb-4">Item Music</h3>
          <p className="text-white/80 mb-6">
            Ваша музыка заслуживает быть услышанной
          </p>
          <div className="flex justify-center space-x-6">
            <Badge variant="outline" className="border-white/20 text-white">
              🎵 Запуск в сентябре
            </Badge>
            <Badge variant="outline" className="border-white/20 text-white">
              🚀 Премиум бесплатно
            </Badge>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;