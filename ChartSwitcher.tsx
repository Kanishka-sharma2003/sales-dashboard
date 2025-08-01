'use client'
export const ChartSwitcher = ({ currentType, setType }: any) => (
  <div className="mb-4 space-x-2">
    <button onClick={() => setType('bar')} className="btn">
      Bar
    </button>
    <button onClick={() => setType('line')} className="btn">
      Line
    </button>
    <button onClick={() => setType('pie')} className="btn">
      Pie
    </button>
  </div>
)
