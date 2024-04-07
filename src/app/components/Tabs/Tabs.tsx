"use client";
import * as Tabs from "@radix-ui/react-tabs";

export default function MyTabs() {
  
  
  
  return (
    <Tabs.Root defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
      <div>
        <Tabs.Content value="account">Content for Tab 1</Tabs.Content>
        <Tabs.Content value="documents">Content for Tab 2</Tabs.Content>
      </div>
    </Tabs.Root>
  );
}
