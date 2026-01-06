import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
} from "@once-ui-system/core";

import PipelineBackground from "@/components/pipelineBackground";
import NeonText from "@/components/NeonText";
import { home, about, person, baseURL, social } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  const github = social.find((s) => s.icon === "github")?.link;
  const linkedin = social.find((s) => s.icon === "linkedin")?.link;

  return (
    <>
      <PipelineBackground />

      <Column maxWidth="m" horizontal="center" paddingY="12" gap="l">
        <Schema
          as="webPage"
          baseURL={baseURL}
          path={home.path}
          title={home.title}
          description={home.description}
          image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
          author={{
            name: person.name,
            url: `${baseURL}${about.path}`,
            image: `${baseURL}${person.avatar}`,
          }}
        />

        {/* HERO */}
        <Column fillWidth horizontal="center" paddingTop="24">
          <Column maxWidth="s" horizontal="center" align="center" gap="l">
            {/* Headline */}
            <RevealFx translateY="4" fillWidth horizontal="center">
              <Heading wrap="balance" variant="display-strong-l" style={{ color: "#fff" }}>
                Just a guy who likes playing with <NeonText>computers</NeonText> and{" "}
                <NeonText>data</NeonText>.
              </Heading>
            </RevealFx>

            {/* Subline */}
            <RevealFx translateY="8" delay={0.1} fillWidth horizontal="center">
              <Text
                wrap="balance"
                variant="heading-default-xl"
                style={{
                  color: "#fff",
                  textShadow: "0 2px 14px rgba(0,0,0,0.75)",
                }}
              >
                <span className="typewriterBlock">
                  Hey, I’m Uthith. I build software, play with data
                  <br />
                  and occasionally pretend I know what I’m doing.
                  <br />
                  Mostly though, I just enjoy making computers
                  <br />
                  do useful (and sometimes fun) things.
                </span>
              </Text>
            </RevealFx>

            {/* CTA ROW */}
            <RevealFx delay={0.2} horizontal="center" fillWidth paddingTop="16">
              <Row gap="l" wrap s={{ direction: "column" }} horizontal="center">
                <Button data-border="rounded" href={about.path} variant="primary" size="l" arrowIcon>
                  <Row gap="m" vertical="center" paddingRight="s">
                    {about.avatar.display && (
                      <Avatar
                        marginRight="s"
                        style={{ marginLeft: "-0.75rem" }}
                        src={person.avatar}
                        size="m"
                      />
                    )}
                    About
                  </Row>
                </Button>

                {github && (
                  <Button
                    data-border="rounded"
                    href={github}
                    variant="primary"
                    size="l"
                    arrowIcon
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </Button>
                )}

                {linkedin && (
                  <Button
                    data-border="rounded"
                    href={linkedin}
                    variant="primary"
                    size="l"
                    arrowIcon
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </Button>
                )}
              </Row>
            </RevealFx>
          </Column>
        </Column>
      </Column>
    </>
  );
}