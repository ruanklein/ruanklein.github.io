<h2>Why I created toolbox-shortcuts utility</h2>
<p>
  On immutable operating systems like Fedora Silverblue, it’s common to organize
  tools across multiple Toolbox containers.
</p>

<p>
  This keeps the system clean, but introduces a practical annoyance: any
  executable installed inside a container stays trapped there.
</p>

<p>
  To run it, you have to enter the right container, which breaks the workflow
  and adds friction to otherwise simple tasks.
</p>

<h2>The Solution</h2>

<p>
  toolbox-shortcuts was created to solve that. It generates smart symlinks that
  expose executables from a toolbox to the host and to other containers, letting
  you call them from anywhere as if everything belonged to the same environment.
</p>

<p>
  I initially built this utility to streamline my own daily workflow on
  Silverblue.
</p>

<p>
  I no longer use immutable systems, so I’m not sure how useful it still is
  today. But it does solve a real problem in that ecosystem and may still be
  valuable for anyone working with that model.
</p>
