const DOC_ID = "1sLIdEpipDngoW0F_sNyjNZywLO4MqbrXUQSAw5m1FDI";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Método não permitido." });
  }

  try {
    const exportUrl = `https://docs.google.com/document/d/${DOC_ID}/export?format=txt&ts=${Date.now()}`;
    const response = await fetch(exportUrl, {
      method: "GET",
      redirect: "follow",
      cache: "no-store",
      headers: {
        "User-Agent": "Caderno-Digital-Marxismo-Direito/1.0",
        "Accept": "text/plain,text/*;q=0.9,*/*;q=0.8"
      }
    });

    if (!response.ok) {
      throw new Error(`Google Docs respondeu com status ${response.status}`);
    }

    const text = await response.text();

    if (!text.trim()) {
      throw new Error("O Google Docs retornou conteúdo vazio.");
    }

    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    return res.status(200).json({
      text,
      fetchedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error("Falha ao sincronizar Google Docs:", error);
    return res.status(502).json({
      error: "Não foi possível consultar o Google Docs neste momento."
    });
  }
}
