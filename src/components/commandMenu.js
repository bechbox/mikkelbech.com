import * as React from "react"
import { Command } from "cmdk"
import { navigate } from "gatsby"

const CommandMenu = ({ element }) => {
  const [open, setOpen] = React.useState(false)

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = e => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(open => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        container={element}
      >
        <Command.Input />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Sections">
            <Command.Item onSelect={() => navigate("/")}>
              Introduction
            </Command.Item>
            <Command.Item onSelect={() => navigate("/startups")}>
              Startups
            </Command.Item>
            <Command.Item onSelect={() => navigate("/service-design")}>
              Service Design
            </Command.Item>
            <Command.Item onSelect={() => navigate("/courses")}>
              Courses
            </Command.Item>
            <Command.Item onSelect={() => navigate("/thoughts")}>
              Thoughts
            </Command.Item>
            <Command.Item onSelect={() => navigate("/dev")}>Dev</Command.Item>
            <Command.Item onSelect={() => navigate("/guitar")}>
              Guitar
            </Command.Item>
          </Command.Group>

          <Command.Item onSelect={() => navigate("/contact")}>
            Contact
          </Command.Item>
        </Command.List>
      </Command.Dialog>
    </div>
  )
}

export default CommandMenu
