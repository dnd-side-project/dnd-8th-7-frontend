import clsx from 'clsx'
import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react'

interface TabProps {
  id: number
  text: string
  onClick?: () => void
}

const TabsContext = createContext<{
  activeTabId: number
  setActiveTabId: Dispatch<SetStateAction<number>>
}>({
  activeTabId: 0,
  setActiveTabId: () => {},
})

export const Tabs = ({
  defaultIndex = 0,
  children,
}: PropsWithChildren<{ defaultIndex?: number }>) => {
  const [activeTabId, setActiveTabId] = useState(defaultIndex)

  return (
    <TabsContext.Provider value={{ activeTabId, setActiveTabId }}>
      {children}
    </TabsContext.Provider>
  )
}

const useTabs = () => {
  const context = useContext(TabsContext)
  if (!context) throw new Error('useTabs must be used within Tabs component')
  return context
}

const TabList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="flex">{children}</ul>
}

const Tab = ({ id, text, onClick = () => {} }: TabProps) => {
  const { activeTabId, setActiveTabId } = useTabs()
  const handleTabClick = () => {
    setActiveTabId(id)
    onClick?.()
  }
  return (
    <li key={id} className="w-1/2">
      <button
        type="button"
        className={clsx(
          'w-full',
          'flex',
          'justify-center',
          'text-textGray-50',
          'text-lg',
          'border-b',
          'border-b-gray-100',
          activeTabId === id ? 'font-bold' : 'font-medium',
        )}
        onClick={handleTabClick}
      >
        <span
          className={clsx('h-11', 'pt-[11px]', {
            'text-black border-b-2 border-b-black': activeTabId === id,
          })}
        >
          {text}
        </span>
      </button>
    </li>
  )
}

const TabPanel = ({ id, children }: PropsWithChildren<{ id: number }>) => {
  const { activeTabId } = useTabs()
  if (id !== activeTabId) return null
  return <div>{children}</div>
}

Tabs.TabList = TabList
Tabs.Tab = Tab
Tabs.TabPanel = TabPanel

export default Tabs
