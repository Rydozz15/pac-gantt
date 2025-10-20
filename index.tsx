import React, { useState } from 'react';
import { Calendar, Users, FileText, BookOpen, AlertCircle, Download } from 'lucide-react';

const GanttPM = () => {
  const [selectedWeek, setSelectedWeek] = useState('all');
  const [showExport, setShowExport] = useState(false);

  // Definición de semanas (Lun-Vie)
  const weeks = [
    { id: 'w1', label: 'Oct 15-18', days: ['Mié 15', 'Jue 16', 'Vie 17'] },
    { id: 'w2', label: 'Oct 21-25', days: ['Lun 21', 'Mar 22', 'Mié 23', 'Jue 24', 'Vie 25'] },
    { id: 'w3', label: 'Oct 28-Nov 1', days: ['Lun 28', 'Mar 29', 'Mié 30', 'Jue 31', 'Vie 1'] },
    { id: 'w4', label: 'Nov 4-8', days: ['Lun 4', 'Mar 5', 'Mié 6', 'Jue 7', 'Vie 8'] },
    { id: 'w5', label: 'Nov 11-15', days: ['Lun 11', 'Mar 12', 'Mié 13', 'Jue 14', 'Vie 15'] },
    { id: 'w6', label: 'Nov 18-22', days: ['Lun 18', 'Mar 19', 'Mié 20', 'Jue 21', 'Vie 22'] },
    { id: 'w7', label: 'Nov 25-29', days: ['Lun 25', 'Mar 26', 'Mié 27', 'Jue 28', 'Vie 29'] },
    { id: 'w8', label: 'Dic 2-6', days: ['Lun 2', 'Mar 3', 'Mié 4', 'Jue 5', 'Vie 6'] },
    { id: 'w9', label: 'Dic 9-13', days: ['Lun 9', 'Mar 10', 'Mié 11', 'Jue 12', 'Vie 13'] },
    { id: 'w10', label: 'Dic 16-20', days: ['Lun 16', 'Mar 17', 'Mié 18', 'Jue 19', 'Vie 20'] },
    { id: 'w11', label: 'Dic 23-27', days: ['Lun 23', 'Mar 24', 'Mié 26', 'Jue 27'] }
  ];

  // Actividades con su distribución semanal
  const tasks = [
    {
      phase: 'FASE 1: INDUCCIÓN Y DIAGNÓSTICO',
      icon: Users,
      color: 'bg-blue-500',
      items: [
        {
          id: 1,
          name: 'Inducción y Contactos Clave',
          schedule: {
            w1: { Mar: 'P', Jue: 'P' },
            w2: { Mar: 'P', Jue: 'P' }
          }
        },
        {
          id: 2,
          name: 'Entrevistas a Facilitadores (identificar obstaculizadores/facilitadores)',
          schedule: {
            w2: { Mar: 'P', Jue: 'P' },
            w3: { Mar: 'P', Jue: 'P' },
            w4: { Mar: 'P', Jue: 'P' }
          }
        },
        {
          id: 3,
          name: 'Vinculación con Prevencionista de Riesgos y Servicios de Salud',
          schedule: {
            w3: { Jue: 'P' },
            w4: { Mar: 'P' }
          }
        },
        {
          id: 4,
          name: 'Creación de Catastro de Servicios de Emergencia',
          schedule: {
            w4: { Vie: 'R' },
            w5: { Lun: 'R', Mié: 'R' }
          }
        },
        {
          id: 5,
          name: 'Revisión de Procesos Existentes (documental)',
          schedule: {
            w2: { Lun: 'R', Mié: 'R', Vie: 'R' },
            w3: { Lun: 'R', Mié: 'R', Vie: 'R' },
            w4: { Lun: 'R', Mié: 'R' }
          }
        },
        {
          id: 6,
          name: 'Síntesis y Gap Analysis (preparación para diseño)',
          schedule: {
            w5: { Vie: 'R' }
          }
        }
      ]
    },
    {
      phase: 'FASE 2: DISEÑO Y DESARROLLO',
      icon: FileText,
      color: 'bg-purple-500',
      items: [
        {
          id: 7,
          name: 'Diseño de Estrategias de Contención Emocional',
          schedule: {
            w6: { Lun: 'R', Mié: 'R', Vie: 'R' },
            w7: { Lun: 'R', Mié: 'R' }
          }
        },
        {
          id: 8,
          name: 'Elaboración Manual/Protocolo de Atención (v1 borrador)',
          schedule: {
            w6: { Lun: 'R', Vie: 'R' },
            w7: { Lun: 'R', Vie: 'R' },
            w8: { Lun: 'R', Mié: 'R', Vie: 'R' }
          }
        },
        {
          id: 9,
          name: 'Diseño Propuestas de Mejoramiento (atención público)',
          schedule: {
            w7: { Vie: 'R' },
            w8: { Vie: 'R' },
            w9: { Lun: 'R' }
          }
        },
        {
          id: 10,
          name: 'Protocolo Socorro/Emergencias Médicas (coordinación)',
          schedule: {
            w8: { Lun: 'R' },
            w9: { Mié: 'R' }
          }
        },
        {
          id: 11,
          name: 'Validación de Borradores con Equipo',
          schedule: {
            w8: { Mar: 'P' },
            w9: { Mar: 'P' },
            w10: { Mar: 'P' }
          }
        },
        {
          id: 12,
          name: 'Ajustes y Versión Final de Documentos',
          schedule: {
            w9: { Vie: 'R' },
            w10: { Lun: 'R', Mié: 'R', Vie: 'R' },
            w11: { Lun: 'R', Mié: 'R' }
          }
        }
      ]
    },
    {
      phase: 'FASE 3: EJECUCIÓN CONTINUA (TODO EL PERIODO)',
      icon: BookOpen,
      color: 'bg-green-500',
      items: [
        {
          id: 13,
          name: 'Atención Presencial Usuarios (contención y derivación)',
          schedule: {
            w1: { Jue: 'P' },
            w2: { Mar: 'P', Jue: 'P' },
            w3: { Mar: 'P', Jue: 'P' },
            w4: { Mar: 'P', Jue: 'P' },
            w5: { Mar: 'P', Jue: 'P' },
            w6: { Mar: 'P', Jue: 'P' },
            w7: { Mar: 'P', Jue: 'P' },
            w8: { Mar: 'P', Jue: 'P' },
            w9: { Mar: 'P', Jue: 'P' },
            w10: { Mar: 'P', Jue: 'P' },
            w11: { Mar: 'P', Jue: 'P' }
          }
        },
        {
          id: 14,
          name: 'Acompañamiento Público Preferencial (embarazadas, discapacidad, adultos mayores)',
          schedule: {
            w2: { Jue: 'P' },
            w3: { Jue: 'P' },
            w4: { Jue: 'P' },
            w5: { Jue: 'P' },
            w6: { Jue: 'P' },
            w7: { Jue: 'P' },
            w8: { Jue: 'P' },
            w9: { Jue: 'P' },
            w10: { Jue: 'P' },
            w11: { Jue: 'P' }
          }
        },
        {
          id: 15,
          name: 'Reuniones Semanales de Equipo (seguimiento/emergencias)',
          schedule: {
            w2: { Jue: 'P' },
            w3: { Jue: 'P' },
            w4: { Jue: 'P' },
            w5: { Jue: 'P' },
            w6: { Jue: 'P' },
            w7: { Jue: 'P' },
            w8: { Jue: 'P' },
            w9: { Jue: 'P' },
            w10: { Jue: 'P' },
            w11: { Jue: 'P' }
          }
        },
        {
          id: 16,
          name: 'Capacitaciones Semanales a Facilitadores (desde Nov 16)',
          schedule: {
            w6: { Mar: 'P' },
            w7: { Mar: 'P' },
            w8: { Mar: 'P' },
            w9: { Mar: 'P' },
            w10: { Mar: 'P' },
            w11: { Mar: 'P' }
          }
        },
        {
          id: 17,
          name: 'Participación en Operativos DIDECO (terreno, cuando se requiera)',
          schedule: {
            w3: { Vie: 'R' },
            w5: { Vie: 'R' },
            w7: { Vie: 'R' },
            w9: { Vie: 'R' }
          }
        },
        {
          id: 18,
          name: 'Registro y Documentación de Casos (minutas de procesos)',
          schedule: {
            w3: { Lun: 'R' },
            w4: { Vie: 'R' },
            w5: { Lun: 'R' },
            w6: { Vie: 'R' },
            w7: { Lun: 'R' },
            w8: { Vie: 'R' },
            w9: { Lun: 'R' },
            w10: { Vie: 'R' },
            w11: { Lun: 'R' }
          }
        }
      ]
    },
    {
      phase: 'CIERRE Y ENTREGA',
      icon: AlertCircle,
      color: 'bg-red-500',
      items: [
        {
          id: 19,
          name: 'Coordinación Evaluación de Satisfacción Usuaria',
          schedule: {
            w10: { Lun: 'R' },
            w11: { Mié: 'R' }
          }
        },
        {
          id: 20,
          name: 'Entrega Final de Documentos y Cierre de Contrato',
          schedule: {
            w11: { Jue: 'P' }
          }
        }
      ]
    }
  ];

  const getDayType = (day) => {
    if (day.includes('Mar') || day.includes('Jue')) return 'presencial';
    return 'remoto';
  };

  const filteredWeeks = selectedWeek === 'all' ? weeks : weeks.filter(w => w.id === selectedWeek);

  const exportToCSV = () => {
    let csv = 'Fase,Tarea,';
    weeks.forEach(w => {
      w.days.forEach(d => {
        csv += `${w.label}-${d},`;
      });
    });
    csv += '\n';

    tasks.forEach(phase => {
      phase.items.forEach(task => {
        csv += `"${phase.phase}","${task.name}",`;
        weeks.forEach(week => {
          week.days.forEach(day => {
            const dayShort = day.split(' ')[0];
            const activity = task.schedule[week.id]?.[dayShort] || '';
            csv += `${activity},`;
          });
        });
        csv += '\n';
      });
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gantt_facilitador_psicologico.csv';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Carta Gantt - Facilitador/a Acompañamiento Psicológico
                </h1>
                <p className="text-sm text-gray-600">
                  Programa: Orientación y Asesorías Ciudadanas PAC | Oct 15 - Dic 31, 2025
                </p>
              </div>
            </div>
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              <Download className="w-4 h-4" />
              Exportar CSV
            </button>
          </div>

          {/* Filtro de semanas */}
          <div className="flex gap-2 flex-wrap mb-4">
            <button
              onClick={() => setSelectedWeek('all')}
              className={`px-3 py-1 rounded text-sm ${
                selectedWeek === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Ver Todas
            </button>
            {weeks.map(w => (
              <button
                key={w.id}
                onClick={() => setSelectedWeek(w.id)}
                className={`px-3 py-1 rounded text-sm ${
                  selectedWeek === w.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {w.label}
              </button>
            ))}
          </div>

          {/* Leyenda */}
          <div className="flex gap-6 text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-600 rounded"></div>
              <span>P = Presencial (Mar/Jue full-time)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-600 rounded"></div>
              <span>R = Remoto (Lun/Mié/Vie)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-50 border border-blue-200 rounded"></div>
              <span>Días presenciales disponibles</span>
            </div>
          </div>

          {/* Estadísticas */}
          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
            <div className="bg-blue-50 p-3 rounded">
              <div className="text-blue-900 font-bold">20 Tareas</div>
              <div className="text-blue-700 text-xs">Total actividades</div>
            </div>
            <div className="bg-purple-50 p-3 rounded">
              <div className="text-purple-900 font-bold">6 Entregables</div>
              <div className="text-purple-700 text-xs">Documentos clave</div>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <div className="text-green-900 font-bold">11 Semanas</div>
              <div className="text-green-700 text-xs">Duración programa</div>
            </div>
            <div className="bg-orange-50 p-3 rounded">
              <div className="text-orange-900 font-bold">22 Días</div>
              <div className="text-orange-700 text-xs">Presenciales (Mar/Jue)</div>
            </div>
          </div>
        </div>

        {/* Gantt Chart */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Week Headers */}
          <div className="border-b-2 border-gray-300 bg-gray-100 sticky top-0 z-20">
            <div className="grid grid-cols-12">
              <div className="col-span-3 p-2 text-xs font-bold text-gray-700 border-r border-gray-300">
                ACTIVIDADES
              </div>
              <div className="col-span-9 grid grid-cols-11 gap-px bg-gray-300">
                {filteredWeeks.map(week => (
                  <div key={week.id} className="bg-gray-100 p-1 text-center">
                    <div className="text-xs font-bold text-gray-700">{week.label}</div>
                    <div className="grid grid-cols-5 gap-px mt-1">
                      {week.days.map((day, idx) => (
                        <div
                          key={idx}
                          className={`text-[10px] ${
                            getDayType(day) === 'presencial'
                              ? 'font-bold text-blue-700'
                              : 'text-gray-600'
                          }`}
                        >
                          {day.split(' ')[0]}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            {tasks.map((phase, phaseIdx) => (
              <div key={phaseIdx} className="border-b border-gray-200">
                {/* Phase Header */}
                <div className={`${phase.color} text-white p-3 flex items-center gap-2 sticky top-16 z-10`}>
                  <phase.icon className="w-5 h-5" />
                  <span className="font-bold text-sm">{phase.phase}</span>
                </div>

                {/* Tasks */}
                {phase.items.map((task) => (
                  <div key={task.id} className="border-b border-gray-100 last:border-b-0">
                    <div className="grid grid-cols-12 min-h-12">
                      {/* Task Name */}
                      <div className="col-span-3 p-3 bg-gray-50 border-r border-gray-200 flex items-center">
                        <span className="text-xs text-gray-700 font-medium">
                          {task.name}
                        </span>
                      </div>

                      {/* Timeline */}
                      <div className="col-span-9 grid grid-cols-11 gap-px bg-gray-200">
                        {filteredWeeks.map((week) => (
                          <div key={week.id} className="bg-white">
                            <div className="grid grid-cols-5 h-full">
                              {week.days.map((day, dayIdx) => {
                                const dayShort = day.split(' ')[0];
                                const hasActivity = task.schedule[week.id]?.[dayShort];
                                const dayType = getDayType(day);
                                
                                return (
                                  <div
                                    key={dayIdx}
                                    className={`border-r border-gray-100 last:border-r-0 flex items-center justify-center text-xs font-bold ${
                                      hasActivity === 'P'
                                        ? 'bg-blue-600 text-white'
                                        : hasActivity === 'R'
                                        ? 'bg-green-600 text-white'
                                        : dayType === 'presencial'
                                        ? 'bg-blue-50'
                                        : 'bg-white'
                                    }`}
                                    title={`${day} - ${hasActivity || 'Sin actividad'}`}
                                  >
                                    {hasActivity || ''}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Recomendaciones PM */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            Recomendaciones del PM - Versión Completa
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-sm text-gray-800 mb-2">Estrategia de Ejecución:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Mar/Jue Presencial:</strong> Entrevistas, capacitaciones, atención directa y reuniones</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Lun/Mié/Vie Remoto:</strong> Diseño, análisis, documentación y síntesis</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong>Operativos Flexibles:</strong> Viernes para adaptarse a operativos DIDECO</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-800 mb-2">Hitos Críticos:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-orange-600 font-bold">→</span>
                  <span><strong>Nov 15:</strong> Catastro emergencias + cierre diagnóstico</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600 font-bold">→</span>
                  <span><strong>Dic 6:</strong> Versión 1 manual completa</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600 font-bold">→</span>
                  <span><strong>Dic 20:</strong> Todos los documentos finalizados</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">→</span>
                  <span><strong>Dic 27:</strong> Entrega final y cierre</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-sm text-yellow-900">
              <strong>⚠️ Equilibrio de Carga:</strong> La distribución está balanceada para evitar sobrecargas. 
              Los martes y jueves combinan atención directa (2-3h) + reuniones/capacitaciones (2-3h). 
              Los días remotos tienen máximo 3 tareas simultáneas.
            </p>
          </div>
        </div>

        {/* Cómo hostear */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-lg p-6 mt-6 border border-blue-200">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-blue-600" />
            Opciones para Compartir/Hostear esta Gantt
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-bold text-sm text-gray-800 mb-2">1. Captura de Pantalla (Más Rápido)</h3>
              <p className="text-sm text-gray-600">
                Haz screenshot completo y compártelo por email/WhatsApp. Ideal para presentaciones rápidas.
              </p>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-bold text-sm text-gray-800 mb-2">2. Exportar a CSV (Botón Verde Arriba)</h3>
              <p className="text-sm text-gray-600">
                Descarga el archivo CSV y ábrelo en Excel/Google Sheets para editarlo o compartirlo.
              </p>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-bold text-sm text-gray-800 mb-2">3. Compartir URL de Claude (Solo Visualización)</h3>
              <p className="text-sm text-gray-600">
                Copia el enlace de esta conversación y compártelo con quien tenga acceso a Claude.
              </p>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-bold text-sm text-gray-800 mb-2">4. Copiar HTML para Web (Avanzado)</h3>
              <p className="text-sm text-gray-600 mb-2">
                Si tienes hosting propio, puedes copiar el código HTML desde el artifact y subirlo a tu servidor.
              </p>
              <code className="text-xs bg-gray-100 p-2 rounded block">
                Requiere: HTML + React + TailwindCSS configurado
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GanttPM;
