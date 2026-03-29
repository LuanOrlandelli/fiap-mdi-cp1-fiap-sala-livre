import { View, Text, StyleSheet } from 'react-native';

type Props = {
  mensagem: string;
};

export default function EmptyState({ mensagem }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nenhuma sala encontrada</Text>
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1E',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  mensagem: {
    color: '#CCCCCC',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
});
[5:31 PM]luanzin7309: rooms.ts
export const rooms = [
  {
    id: '1',
    nome: 'Sala A101',
    bloco: 'A',
    capacidade: 6,
    periodo: 'Manhã',
    disponivel: true,
    imagem: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '2',
    nome: 'Sala B204',
    bloco: 'B',
    capacidade: 10,
    periodo: 'Tarde',
    disponivel: true,
    imagem: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '3',
    nome: 'Sala C301',
    bloco: 'C',
    capacidade: 12,
    periodo: 'Noite',
    disponivel: false,
    imagem: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '4',
    nome: 'Sala D102',
    bloco: 'D',
    capacidade: 8,
    periodo: 'Tarde',
    disponivel: true,
    imagem: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
  },
];