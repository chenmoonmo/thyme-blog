import dayjs from 'dayjs'
export default function Articles({ article }) {
  const { title, content, date } = article
  return (
    <div className="mb-10 cursor-pointer">
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="pt-2 text-sm text-gray-700 font-light">{content}</div>
      <div className="text-xs text-gray-400 font-thin pt-3">{dayjs(date).format('MMM D')}</div>
    </div>)
}